import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/core/services/film-service.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Film } from '../../models/film';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit, OnDestroy {

  constructor(
    private filmService: FilmService,
    private router: Router) { }

  private films: object;

  private films$: Observable<any>

  private filmObserver: Subscription;

  ngOnInit() {
    this.filmObserver = this.filmService.getFilms().subscribe((data) => {
      this.films = data;
    });
  }

  ngOnDestroy() {
    this.filmObserver.unsubscribe()
  }

  onBorrarPelicula(peli: Film) {
    // MAL
    /*this.filmService.deleteFilmById(peli.id).subscribe(() => {
      this.filmService.getFilms().subscribe((data) => {
        // FIXME use operators
        this.films = data;
      });
    })*/
    const subscription =
      this.filmService.deleteFilmById(peli.id).pipe(
        switchMap(() => this.filmService.getFilms())
      ).subscribe((data) => {
        this.films = data;
        subscription.unsubscribe();
      });
  }

  onEditarPelicula(peli: Film) {
    this.router.navigate([`/films/edit/${peli.id}`]);
  }

}
