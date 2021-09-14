package com.lovin.moviesapi.repository;

import com.lovin.moviesapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByFirstName(String firstName);

    List<User> findByFirstNameContaining(String name);

    //JPQL
    @Query("select u from User u where u.userEmail=?1")
    User getUserByEmailAddress(String email);

    @Query(" u.firstName from User u where u.userEmail = ?1")
    String getUserFirstNameByEmailAddress(String userEmail);


}
