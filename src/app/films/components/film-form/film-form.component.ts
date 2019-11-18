import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/films/models/film';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/core/services/film-service.service';


@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  film: Film = new Film();


  constructor(
    private route: ActivatedRoute,
    private service: FilmService,
    private router: Router,

  ) {

   }
  private id: number = parseInt(this.route.snapshot.params.id);

  ngOnInit() {
    if(this.id){
    this.service.getFilmById(this.id).subscribe(data => {
      console.log(data);
      this.film.name = data['name'];
      this.film.image = data['image'];
      this.film.gender = data['gender'];
      this.film.imdbUrl = data['imbdUrl'];
    });
  }
  }


  onSubmit(){
    if(this.id){
  this.service.updateFilmsById(this.id, this.film).subscribe(() => {
    this.router.navigate(['/films'])  });
    }else{
      this.service.createFilm(this.film).subscribe();
      this.router.navigate(['/films']);
    }

  // this.service.removeFilm(this.id);
  // this.service.addFilm(this.film);
  //this.service.updateFilm(this.film, this.id);
  }


}
