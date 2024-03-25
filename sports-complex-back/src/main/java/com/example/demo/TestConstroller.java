package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestConstroller {
	
	
	@GetMapping("/test/hello")
	public String helloProxy() {
		System.out.println("test");
		return "hello Proxy";
	}
}
