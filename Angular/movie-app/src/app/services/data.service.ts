import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

  getMovieByContains():Observable<any>{
    return this.http.get("https://movie-database-imdb-alternative.p.rapidapi.com/?s=${title}&page=1&r=json");
  }
}
