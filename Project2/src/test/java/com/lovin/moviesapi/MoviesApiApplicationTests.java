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
				.firstName("Bob")
				.lastName("Saggot")
				.password("1234")
				.userName("bobs")
				.userEmail("bob@gmail.com")
				.build();
		userRepository.save(user);
	}




}
