package com.lovin.moviesapi.security;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final User withUsername = repository.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException(username);
        }
        //some reason the User class from spring security wont pick up withUsername?
        UserDetails userDetails  = User.with
        return userDetails;
    }
}
