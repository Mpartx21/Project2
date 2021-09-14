package com.lovin.moviesapi.repository;

import com.lovin.moviesapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
