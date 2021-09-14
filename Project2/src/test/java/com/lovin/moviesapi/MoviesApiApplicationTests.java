package com.lovin.moviesapi;

import com.lovin.moviesapi.entity.User;
import com.lovin.moviesapi.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MoviesApiApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Test
	public void saveUser(){
		User user = User.builder()
				.firstName("Mary")
				.lastName("Jane")
				.password("1234")
				.userName("MJ23")
				.userEmail("GOAT@gmail.com")
				.build();
		userRepository.save(user);
	}

	@Test
	public void displayGetUserById(){
		User user = userRepository.getUserById(1);
		System.out.println(user);
	}

//	@Test
//	public void deleteUserById(){
//		User user = userRepository.deleteUserById(2);
//		System.out.println(user);
//	}

}
