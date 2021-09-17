import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopularMovie } from 'src/app/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {


  constructor(private dataService: DataService) { }
  popularMovies!: PopularMovie[];

  ngOnInit(): void {
   this.dataService.getpopularMovies().subscribe((result)=> {
      this.popularMovies = result.Data;
    })
  }

}

