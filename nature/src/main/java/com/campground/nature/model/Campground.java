package com.campground.nature.model;

import javax.persistence.*;

@Entity
@Table(name = "campgrounds")
public class Campground {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "campground_name")
    private String campground_name;

    @Column(name = "campground_image")
    private String campground_image;

    @Column(name = "campground_description")
    private String campground_description;

    @Column(name = "campground_price")
    private String campground_price;

    public Campground() {

    }

    public Campground(String campground_name, String campground_image, String campground_description, String campground_price) {
        this.campground_name = campground_name;
        this.campground_image = campground_image;
        this.campground_description = campground_description;
        this.campground_price = campground_price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCampground_name() {
        return campground_name;
    }

    public void setCampground_name(String campground_name) {
        this.campground_name = campground_name;
    }

    public String getCampground_image() {
        return campground_image;
    }

    public void setCampground_image(String campground_image) {
        this.campground_image = campground_image;
    }

    public String getCampground_description() {
        return campground_description;
    }

    public void setCampground_description(String campground_description) {
        this.campground_description = campground_description;
    }

    public String getCampground_price() {
        return campground_price;
    }

    public void setCampground_price(String campground_price) {
        this.campground_price = campground_price;
    }
}
