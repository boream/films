import { NgModule } from '@angular/core';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { SharedModule } from '../shared/shared.module';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  declarations: [
    FilmCardComponent,
    FilmListComponent,
    FilmFormComponent
  ],
  imports: [
    SharedModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
