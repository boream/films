import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/films/models/film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent {

  @Input() film: Film;

  @Output() submit: EventEmitter<Film> = new EventEmitter();

  // private id: number = parseInt(this.route.snapshot.params.id);

  onSubmit() {
    this.submit.emit(this.film);
  }
}
