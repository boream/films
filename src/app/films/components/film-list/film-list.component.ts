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
export class FilmListComponent implements OnInit {

  constructor(
    private filmService: FilmService,
    private router: Router) { }

  private films: object;

  private films$: Observable<any>;

  ngOnInit() {
    this.films$ = this.filmService.getFilms();
  }

  onBorrarPelicula(peli: Film) {
    this.films$ = this.filmService.deleteFilmById(peli.id).pipe(
      switchMap(() => this.filmService.getFilms())
    );
  }

  onEditarPelicula(peli: Film) {
    this.router.navigate([`/films/edit/${peli.id}`]);
  }

}
