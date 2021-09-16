import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/movie';
import { DataService } from 'src/app/services/data.service';

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
