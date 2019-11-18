import { Component, OnInit, Input, Output } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from 'src/app/core/services/film-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-film',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input( ) pelicula: Film;


  constructor( private service: FilmService,
                private route: Router) {

 }

 public eliminarPelicula(){
   this.service.deleteFilmById(this.pelicula.id).subscribe();
   location.reload();
  }

  public editarPelicula(){
    this.route.navigate([`/films/edit/${this.pelicula.id}`]);
   //this.service.updateFilmsById(this.pelicula.id, this.pelicula).subscribe();
    //location.reload();
   }


  ngOnInit() {
  }

}
