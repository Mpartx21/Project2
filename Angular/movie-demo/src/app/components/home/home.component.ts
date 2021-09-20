import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieDetail } from 'src/app/models/movie/movie';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataService: DataService) { }
  @Input() movie!: Movie;
  @Input() movieDetail!: MovieDetail;




//  ngOnInit(): void {
//    this.dataService.searchMovie("bat").subscribe(result => {
//      this.movie = result.Search;
//    });  }

}
