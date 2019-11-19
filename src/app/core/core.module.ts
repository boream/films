import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IsLoggedGuard } from './guards/is-logged-ward';
import { FilmService } from './services/film-service.service';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ErrorComponent,
  HeaderComponent
];

const MODULES = [
  BrowserModule,
  HttpClientModule,
  NgbModule
]
@NgModule({
  declarations: [...COMPONENTS],
  providers: [
    IsLoggedGuard,
    FilmService
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class CoreModule { }
