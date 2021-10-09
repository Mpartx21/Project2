package com.lovin.moviesapi.repository;

import com.lovin.moviesapi.entity.UserFavoriteMovies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavMovieRepository extends JpaRepository<UserFavoriteMovies, Long> {

}
