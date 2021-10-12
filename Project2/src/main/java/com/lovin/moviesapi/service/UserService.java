package com.lovin.moviesapi.service;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.entity.UserFavoriteMovies;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User getUserById(String Id);
    User deleteUser(String Id);
    User updateUser(String Id, User user);
    User getUserByemailandPword(String email,String password);
    void addMovie(String Id, String movieId);
}
