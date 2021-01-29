package com.campground.nature.controller;

import com.campground.nature.model.User;
import com.campground.nature.model.UserProfile;
import com.campground.nature.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //create user profile rest api
    @PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {


        return ResponseEntity.ok(user);
    }
}
