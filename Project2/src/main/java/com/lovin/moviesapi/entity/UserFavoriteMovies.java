package com.lovin.moviesapi.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@ToString(
        exclude = "user"
)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(
        name = "fav_movies"
)
public class UserFavoriteMovies {
    @Id
    @SequenceGenerator(
            name = "movie_sequence",
            sequenceName = "movie_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "movie_sequence"
    )
    private long favMovieId;

    private String movieId;

    @OneToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            optional=true
    )
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "userId"
    )
    private User user;
}
