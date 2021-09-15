package com.lovin.moviesapi.controller;

import com.lovin.moviesapi.entity.UserFavoriteMovies;
import com.lovin.moviesapi.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class MovieController {

    @Autowired
    private MovieService service;

    @PostMapping("/movies")
    public UserFavoriteMovies saveMovie(@RequestBody UserFavoriteMovies userFavoriteMovies) {
        return service.saveMovie(userFavoriteMovies);
    }

//    @GetMapping("/movies/{id}")
//    public UserFavoriteMovies getMovieById(@PathVariable("id") long movieId) {
//        return service.getMovieById(movieId);
//    }

    @GetMapping("/movies/{id}")
    public void getMovieById(@PathVariable("id") long movieId) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://movie-database-imdb-alternative.p.rapidapi.com/?i={id}&r=json"))
                .header("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com")
                .header("x-rapidapi-key", "924b762eb3mshcd6bc8186d91536p174a5cjsn723c18698e73")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}
