import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private data:DataService) { }

  movies:Movie[]=[];

  ngOnInit(): void {
    this.data.searchMovie('BatMan').subscribe(result => {
      this.movies = result.Search;
    });
  }

}
