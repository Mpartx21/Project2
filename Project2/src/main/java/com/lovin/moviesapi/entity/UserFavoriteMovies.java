package com.lovin.moviesapi.entity;

import lombok.*;



@AllArgsConstructor
@NoArgsConstructor
@Builder

@ToString(exclude = "user")
public class UserFavoriteMovies {

    private long favMovieId;

    private String movieId;


}
