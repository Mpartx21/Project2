import { Component, OnInit } from '@angular/core';
import { MovieDetail, Movie } from 'src/app/movie';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: Observable<any>;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  

  ngOnInit(): void {

    this.movieDetails = this.route.queryParams.pipe(
      map(queryParams => queryParams["movieId"]),
      switchMap(imdbId => this.data.getMovieDetails(imdbId)))
    
   /* this.movieDetails = this.route.queryParams.pipe(
      map(queryParams => queryParams["movieId"]),
      switchMap(imdbId => this.data.getMovieDetails(imdbId)),
      switchMap((movie: MovieDetail) =>
        this.data.searchMovie(movie.Title).pipe(
          map((similarMovies: Array<Movie>) =>
            similarMovies.filter(
              (similarMovie: Movie) => similarMovie.Title !== movie.Title
            )
          ),
          map((similarMovies: Array<Movie>) => ({
            ...movie,
            similarMovies
          }))
        )
      )
    ); */
  } 
}