import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, PopularMovie } from '../movie';
import { Observable } from 'rxjs';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
  Data: PopularMovie[];

};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL: string = 'http://www.omdbapi.com/?apikey=ddb4f3ab'
  popularMovieUrl: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1c7cb7fc6cb31b362469db776d0b098f&language=en-US&page=1'

  constructor(private httpClient: HttpClient) { }
  
  searchMovie(query: string) {
    return this.httpClient.get<any>(`${this.apiURL}&s=${query}`);
  }

  getMovieDetails(imbdId: string){
    return this.httpClient.get<any>(`${this.apiURL}&i=${imbdId}&plot=full`);

  }

  getpopularMovies(){
    return this.httpClient.get<any>(`${this.popularMovieUrl}`);

  }
}
