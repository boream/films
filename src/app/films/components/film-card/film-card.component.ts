import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../models/film';


@Component({
  selector: 'app-film',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {

  @Input() pelicula: Film;
  @Output() editar: EventEmitter<Film> = new EventEmitter();
  @Output() borrar: EventEmitter<Film> = new EventEmitter();

  public eliminarPelicula() {
    this.borrar.emit(this.pelicula)
  }

  public editarPelicula() {
    this.editar.emit(this.pelicula)
  }
}
