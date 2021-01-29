import axios from 'axios';

const CAMPGROUND_API_BASE_URL = "http://localhost:8080/api/v1/campgrounds";

class CampgroundService {

    //get all campgrounds
    getCampgrounds() {
        return axios.get(CAMPGROUND_API_BASE_URL);
    }

    //create a campground
    createCampground(campground) {
        return axios.post(CAMPGROUND_API_BASE_URL, campground);
    }

    //get a campground id 
    getCampgroundId(campgroundId){
        return axios.get(CAMPGROUND_API_BASE_URL + "/" + campgroundId);
    }

    //update a campground
    updateCampground(campground, campgroundId) {
        return axios.put(CAMPGROUND_API_BASE_URL + "/" + campgroundId, campground);
    }

    //delete a campground
    deleteCampground(campgroundId) {
        return axios.delete(CAMPGROUND_API_BASE_URL + "/" + campgroundId);
    }
}

export default new CampgroundService();