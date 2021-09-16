package com.lovin.moviesapi.service;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.entity.UserFavoriteMovies;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User getUserById(long userId);
    User deleteUser(long userId);
    User updateUser(long userId, User user);
    User getUserByemailandPword(String email,String password);
    void addMovie(long userId, String movieId);
}
