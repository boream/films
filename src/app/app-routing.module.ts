import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { ErrorComponent } from './core/components/error/error.component';
import { IsLoggedGuard } from './core/guards/is-logged-ward';

const routes: Routes = [
  {path: '', redirectTo: '/films', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, },
  {
    path: 'films', 
    loadChildren: () => import('./films/films.module').then(mod => mod.FilmsModule), 
    canActivate: [IsLoggedGuard]
  },
  {path: '**', component: ErrorComponent,  },
  //{path: 'home', component: HomeComponent, canActivate: [ActivateGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
