import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  { path: 'create', component: FilmDetailComponent },
  { path: 'edit/:id', component: FilmDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
