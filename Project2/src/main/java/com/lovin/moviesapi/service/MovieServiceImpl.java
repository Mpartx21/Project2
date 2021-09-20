package com.lovin.moviesapi.service;

import com.lovin.moviesapi.entity.UserFavoriteMovies;
import com.lovin.moviesapi.repository.FavMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService{

    @Autowired
    private FavMovieRepository repository;

    @Override
    public UserFavoriteMovies saveMovie(UserFavoriteMovies userFavoriteMovies) {
        return repository.save(userFavoriteMovies);
    }

    @Override
    public UserFavoriteMovies getMovieById(long movieId) {
        Optional<UserFavoriteMovies> userFavoriteMovies = repository.findById(movieId);
        if (userFavoriteMovies.isEmpty()){
            System.out.println("There are no movie records");
        }

        return userFavoriteMovies.get();
    }

    @Override
    public UserFavoriteMovies deleteMovie(long movieId) {
        UserFavoriteMovies movieDB = repository.findById(movieId).get();
        repository.delete(movieDB);
        return movieDB;
    }
}
