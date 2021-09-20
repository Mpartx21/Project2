import { Component, Input, OnInit } from '@angular/core';
import { Movie,MovieDetail } from 'src/app/models/movie/movie';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() movieDetail!: MovieDetail;
  constructor(private data:DataService) { }

  movies:Movie[]=[];

  ngOnInit(): void {
    this.data.searchMovie('BatMan').subscribe(result => {
      this.movies = result.Search;
    });
  }

}
