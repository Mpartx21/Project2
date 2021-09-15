package com.lovin.moviesapi.repository;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.entity.UserFavoriteMovies;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FavMovieRepositoryTest {

    @Autowired
    private FavMovieRepository repository;

    @Test
   public void SaveFavMovie(){
        User user = User.builder()
                .firstName("Charlie")
                .lastName("Murphy")
                .userName("couch")
                .password("rickJames")
                .userEmail("rj@gmail.com")
                .build();
        UserFavoriteMovies userFavoriteMovies = UserFavoriteMovies.builder()
                .movieId("tt4154796")
                .user(user)
                .build();
        repository.save(userFavoriteMovies);
    }

//    Will run into a stack overflow if ran
//    @Test
//    public void displayAllMovies(){
//        List<UserFavoriteMovies> userFavoriteMovies = repository.findAll();
//        System.out.println(userFavoriteMovies);
//    }



}