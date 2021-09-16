import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieDetail } from 'src/app/movie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  @Input() movie!: Movie;
  @Input() movieDetail!: MovieDetail;

  

}
