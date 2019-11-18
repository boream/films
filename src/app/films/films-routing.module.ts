import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmFormComponent } from './components/film-form/film-form.component';

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  { path: 'create', component: FilmFormComponent },
  { path: 'edit/:id', component: FilmFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
