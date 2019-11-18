import { Injectable } from '@angular/core';
// import { Film } from '../films/models/film';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) { }

  public getFilms() {
    const getFilmsUrl = `${environment.apiUrl}${environment.filmResource}`;
    return this.http.get(getFilmsUrl);
  }

  public deleteFilmById(id: number) {
    const deleteFilmByIdUrl = `${environment.apiUrl}${environment.filmResource}${id}`;
    return this.http.delete(deleteFilmByIdUrl);
  }

  public updateFilmsById(id: number, film: object) {
    const updateFilmByUrl = `${environment.apiUrl}${environment.filmResource}${id}`;
    return this.http.put(updateFilmByUrl, film);

  }

  public getFilmById(id: number) {
    const getFilmByIdUrl = `${environment.apiUrl}${environment.filmResource}${id}`;
    return this.http.get(getFilmByIdUrl);
  }

  public createFilm(film: object) {
    const createFilmByIdUrl = `${environment.apiUrl}${environment.filmResource}`;
    return this.http.post(createFilmByIdUrl, film);
  }
}
