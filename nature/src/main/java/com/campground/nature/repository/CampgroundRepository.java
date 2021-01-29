package com.campground.nature.repository;

import com.campground.nature.model.Campground;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CampgroundRepository extends JpaRepository<Campground, Long> {

}
