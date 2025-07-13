package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class CognizantWeek4TaskSpringRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(CognizantWeek4TaskSpringRestApplication.class, args);
	}

}
