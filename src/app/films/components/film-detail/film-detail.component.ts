import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/core/services/film-service.service';
import { Film } from '../../models/film';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  public miPelicula: Film = {
    id: null,
    gender: '',
    image: '',
    imdbUrl: '',
    language: '',
    name: ''
  };
  private id: number = parseInt(this.route.snapshot.params.id);

  constructor(
    private service: FilmService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (this.id) {
      this.service.getFilmById(this.id).subscribe((data: Film) => {
        this.miPelicula = data;
      })
    }
  }

  onSubmit(film: Film) {
    debugger
    if (film.id) {
      this.service.updateFilmsById(film.id, film).subscribe(() => {
        this.router.navigate(['/films'])
      });
    } else {
      this.service.createFilm(film).subscribe();
      this.router.navigate(['/films']);
    }
  }

}
