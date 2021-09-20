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
        return null;
    }

//    @GetMapping("/movies/{id}")
//    public UserFavoriteMovies getMovieById(@PathVariable("id") long movieId) {
//        return service.getMovieById(movieId);
//    }

    @GetMapping("/movies/{id}")
    public void getMovieById(@PathVariable("id") long movieId) throws IOException, InterruptedException {
        System.out.println("Something goes here");
    }
}
