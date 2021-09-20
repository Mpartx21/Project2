import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';

import { PopularMovie } from 'src/app/models/movie/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {
  constructor(private dataService: DataService) { }

  movies: PopularMovie[] = [];

  ngOnInit(): void {
    this.dataService.getpopularMovies().subscribe(result => {
      this.movies = result.results
    });
  }

}


