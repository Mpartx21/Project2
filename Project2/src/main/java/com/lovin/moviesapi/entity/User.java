package com.lovin.moviesapi.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class User {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String userName;
    private String userEmail;
    private String password;
    private List<String> favoriteMovies;

    public User(String firstName, String lastName, String userName, String userEmail, String password, List<String> favoriteMovies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.userEmail = userEmail;
        this.password = password;
        this.favoriteMovies = favoriteMovies;
    }
}
