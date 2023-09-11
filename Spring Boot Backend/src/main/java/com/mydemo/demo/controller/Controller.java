package com.mydemo.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hi")
public class Controller {
	
	@GetMapping("/user")
	public String sayHi() {
		return "Hi How R U User";
	}
	
	@GetMapping("/admin")
	public String sayHi2() {
		return "This is Admin";
	}

}
