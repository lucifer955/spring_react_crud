package com.campground.nature.controller;

import com.campground.nature.exception.ResourceNotFound;
import com.campground.nature.model.Campground;
import com.campground.nature.repository.CampgroundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CampgroundController {

    @Autowired
    private CampgroundRepository campgroundRepository;

    //get all campgrounds
    @GetMapping("/campgrounds")
    public List<Campground> getAllCampgrounds () {
        return campgroundRepository.findAll();
    }

    //create campground rest api
    @PostMapping("/campgrounds")
    public Campground createCampground(@RequestBody Campground campground) {
        return campgroundRepository.save(campground);
    }

    //get campground by  id rest api
    @GetMapping("campgrounds/{id}")
    public ResponseEntity<Campground> getCampgroundById(@PathVariable Long id) {
        Campground campground = campgroundRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Campground not exist with id :"+ id));
        return ResponseEntity.ok(campground);
    }

    //update campground rest api
    @PutMapping("campgrounds/{id}")
    public ResponseEntity<Campground> updateCampground(@PathVariable Long id, @RequestBody Campground campgroundDetails) {
        Campground campground = campgroundRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Campground not exist with id :"+ id));
        campground.setCampground_name(campgroundDetails.getCampground_name());
        campground.setCampground_image(campgroundDetails.getCampground_image());
        campground.setCampground_price(campgroundDetails.getCampground_price());
        campground.setCampground_description(campgroundDetails.getCampground_description());

        Campground updatedCampground = campgroundRepository.save(campground);
        return ResponseEntity.ok(updatedCampground);
    }

    //delete a campground rest api
    @DeleteMapping("campgrounds/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCampground(@PathVariable Long id) {
        Campground campground = campgroundRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Campground not exist with id :"+ id));

        campgroundRepository.delete(campground);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
