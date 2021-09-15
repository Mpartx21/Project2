package com.lovin.moviesapi.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Array;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(
        name = "user_table",
        uniqueConstraints = {@UniqueConstraint(
                name = "emailid_unique",
                columnNames = "email_address"
        ),
        @UniqueConstraint(
                name = "user_name_unique",
                columnNames = "user_name"
        )
        }

)
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long userId;
    private String password;
    private String firstName;
    private String lastName;

    @Column(
            name = "user_name",
            nullable = false
    )
    private String userName;

    @Column(
            name = "email_address",
            nullable = false
    )
    private String userEmail;

    @OneToOne(
            mappedBy = "user"
    )
    private UserFavoriteMovies userFavoriteMovies;
}
