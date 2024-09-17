package com.anis.dev_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class DevBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevBackendApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot() {
		return "Hello World";
	}

}
