package com.lovin.moviesapi.repository;

import com.lovin.moviesapi.entity.UserFavoriteMovies;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FavMovieRepository extends MongoRepository<UserFavoriteMovies, Long> {

}
