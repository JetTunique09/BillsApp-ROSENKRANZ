package com.example.demo.controller;

import com.example.demo.security.IsAdmin;
import com.example.demo.security.IsUser;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class HelloController {


    @GetMapping("/")
    public String hello() {
        return "Hello Anonyme";
    }

    @IsUser
    @GetMapping("/helloUser")
    public String helloUser() {
        return "Hello User";
    }

    @IsAdmin
    @GetMapping("/helloAdmin")
    public String helloAdmin() {
        return "Hello Admin";
    }
}
