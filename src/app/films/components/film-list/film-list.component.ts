import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/core/services/film-service.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit, OnDestroy {

  constructor(public filmService: FilmService) { }

  public films: object;

  public films$: Observable<any>

  private filmObserver: Subscription;

  ngOnInit() {
    this.filmObserver = this.filmService.getFilms().subscribe((data) => {
      this.films = data;
    });
  }

  ngOnDestroy() {
    this.filmObserver.unsubscribe()
  }

}
