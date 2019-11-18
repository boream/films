import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { FilmsModule } from './films/films.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    LoginModule
    // FilmsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
