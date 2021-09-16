import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
  movies: Movie[] = [];

  ngOnInit(): void {
    this.data.searchMovie('Bat').subscribe(result => {
      this.movies = result.Search;
    });
  }

}
