package com.lovin.moviesapi.service;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.entity.UserFavoriteMovies;
import com.lovin.moviesapi.repository.FavMovieRepository;
import com.lovin.moviesapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FavMovieRepository movieRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String Id) {
        Optional<User> user = userRepository.findById(Id);
        if(user.isEmpty()){
            System.out.println("This user Id does not exist");
        }
        return user.get();
    }

    @Override
    public User deleteUser(String Id) {
        User userDB = userRepository.findById(Id).get();
        userRepository.delete(userDB);
        return userDB;
    }

    @Override
    public User updateUser(String Id, User user) {
       User userDB = userRepository.findById(Id).get();
       userDB.setUserName(user.getUserName());
       userDB.setUserEmail(user.getUserEmail());
       return userRepository.save(user);
    }

    @Override
    public User getUserByemailandPword(String email, String password) {
//        return userRepository.getUserByEmailAndPassword(email,password);
        return null;
    }

    @Override
    public void addMovie(String Id, String movieId) {

    }

//    @Override
//    public void addMovie(Long userId, String movieId) {
//        Optional<User> user = userRepository.findById(userId);
//        if(user.isEmpty()){
//            System.out.println("this user does not exist");
//        }
//        user.get();
//        UserFavoriteMovies movieDB = UserFavoriteMovies.builder()
//                .movieId(movieId)
////                .user(user)
//                .build();
//    }
}
