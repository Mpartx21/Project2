package com.lovin.moviesapi.repository;

import com.lovin.moviesapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByFirstName(String firstName);

    List<User> findByFirstNameContaining(String name);

//    //JPQL
    @Query("select u from User u where u.userId=?1")
    User getUserById(long userId);

//    @Query("delete u.user_id from User where u.user_id = ?1")
//    User deleteUserById(long userId);


//    @Query("u.firstName from User u where u.userEmail = ?1")
//    String getUserFirstNameByEmailAddress(String userEmail);
// native named params
@Query(
        value = "SELECT * from user_table u where u.email_address= :email and u.password = :password",
        nativeQuery = true
)
User getUserByEmailAndPassword(
        @Param("email") String email,
        @Param("password")String password
);


}
