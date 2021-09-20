import { Component, Input, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Movie, MovieDetail } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
=======
import { Movie, MovieDetail } from 'src/app/models/movie/movie';
import { DataService } from 'src/app/services/data/data.service';
>>>>>>> Stashed changes
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor( ){}
  @Input() movie!: Movie;
  @Input() movieDetail!: MovieDetail;






 // ngOnInit(): void {
   // this.data.searchMovie("bat").subscribe(result => {
     // this.movies = result.Search;
   // });
//  }

}
