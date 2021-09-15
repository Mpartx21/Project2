package com.lovin.moviesapi.service;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(long userId) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()){
            System.out.println("This user Id does not exist");
        }
        return user.get();
    }

    @Override
    public User deleteUser(long userId) {
        User userDB = userRepository.findById(userId).get();
        userRepository.delete(userDB);
        return userDB;
    }

    @Override
    public User updateUser(long userId, User user) {
       User userDB = userRepository.findById(userId).get();
       userDB.setUserName(user.getUserName());
       userDB.setUserEmail(user.getUserEmail());
       return userRepository.save(user);
    }

    @Override
    public User getUserByemailandPword(String email, String password) {
        return userRepository.getUserByEmailAndPassword(email,password);
    }

 
}
