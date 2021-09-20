import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/movie/movie';

import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
query!: string;
movies!: Movie[];


  constructor(private data: DataService) {

   }
   getSearchResults() {
    this.data.searchMovie(this.query).subscribe(result => {
      this.movies = result.Search;

    });
  }



}
