package com.lovin.moviesapi.controller;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return service.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") long userId) {
        return service.getUserById(userId);
    }

    @DeleteMapping("/users/{id}")
    public User deleteUser(@PathVariable("id") long userId) {
        return service.deleteUser(userId);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable("id") long userId, @RequestBody User user) {
        return service.updateUser(userId, user);
    }

    @GetMapping("/login")
    public User getUserByCredentials(@RequestBody String email, @RequestBody String password){
        return service.getUserByemailandPword(email,password);
    }
}
