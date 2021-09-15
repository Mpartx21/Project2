import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../models/movie/movie';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL: string = 'http://www.omdbapi.com/?apikey=ddb4f3ab'

  constructor(private httpClient: HttpClient) { }
  
  searchMovie(name: string) {
    return this.httpClient.get<any>(`${this.apiURL}&s=${name}`);
  }
}
