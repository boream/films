import { Component, OnInit, Output, EventEmitter, Input, OnChanges,SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Film } from '../../models/film';

@Component({
  selector: 'app-film-form-reactive',
  templateUrl: './film-form-reactive.component.html',
  styleUrls: ['./film-form-reactive.component.scss']
})
export class FilmFormReactiveComponent implements OnInit, OnChanges {

  @Output() save: EventEmitter<Film> = new EventEmitter();
  @Input() film: Film;
  genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura']

  filmForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filmForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      language: ['', Validators.required],
      image: ['', Validators.required],
      imdbUrl: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  
    if (!changes.film.firstChange) {
      const nuevaPeli = changes.film.currentValue;
      this.filmForm.controls.name.setValue(nuevaPeli.name);

      this.filmForm.setValue(nuevaPeli)
    }
  }

  // private id: number = parseInt(this.route.snapshot.params.id);

  onSubmit(value) {
    console.log(this.filmForm)
    console.log('value', value)

    // this.filmForm.controls.name.setValue('holaaaaaaaaa')
    // this.save.emit(value);
  }
}
