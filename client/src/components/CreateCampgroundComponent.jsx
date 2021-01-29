import React, { Component } from 'react'
import CampgroundService from '../services/CampgroundService';

export default class CreateCampgroundComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id:this.props.match.params.id,
            campground_name:"",
            campground_image:"",
            campground_description:"",
            campground_price:""
        }

        this.changeCampgroundNameHandler = this.changeCampgroundNameHandler.bind(this);
        this.changeCampgroundImageHandler = this.changeCampgroundImageHandler.bind(this);
        this.changeCampgroundPriceHandler = this.changeCampgroundPriceHandler.bind(this);
        this.changeCampgroundDescriptionHandler = this.changeCampgroundDescriptionHandler.bind(this);
        this.saveOrUpdateCampground = this.saveOrUpdateCampground.bind(this);
    }

    componentDidMount() {
        if(this.state.id === "-1") {
            return
        } else {        
            CampgroundService.getCampgroundId(this.state.id).then((res) => {
            let campground = res.data;
            this.setState({
                campground_name: campground.campground_name, 
                campground_image: campground.campground_image, 
                campground_price: campground.campground_price, 
                campground_description: campground.campground_description
            })
        });}

    }

    saveOrUpdateCampground = (event) => {
        event.preventDefault();
        let campground = {
            campground_name: this.state.campground_name, 
            campground_image: this.state.campground_image, 
            campground_price: this.state.campground_price, 
            campground_description: this.state.campground_description
        };

        console.log("campground => " + JSON.stringify(campground))


        if(this.state.id === "-1") {
            //pass the campground details add a campground
            CampgroundService.createCampground(campground).then((res) => {
                this.props.history.push("/campgrounds")
            })
        } else { 
            //pass the campground details update a campground
            CampgroundService.updateCampground(campground, this.state.id).then((res) => {
                this.props.history.push("/campgrounds")
            })
        }

    }
    changeCampgroundNameHandler = (event) => {
        this.setState({campground_name: event.target.value});
    }
    
    changeCampgroundImageHandler = (event) => {
        this.setState({campground_image:event.target.value});
    }

    changeCampgroundPriceHandler = (event) => {
        this.setState({campground_price:event.target.value});
    }
    changeCampgroundDescriptionHandler = (event) => {
        this.setState({campground_description:event.target.value});
    }

    cancel() {
        this.props.history.push("/campgrounds");
    }
    render() {
        return (
            <div className="row mt-3">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center m3-2 mb-3">{this.state.id === "-1" ? "Add Campground" : "Update Campground"}</h3>
                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Campground Name: </label>
                                            <input placeholder="Campground Name" name="campground_name" className="form-control" 
                                                value={this.state.campground_name} onChange={this.changeCampgroundNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Campground Image: </label>
                                            <input placeholder="Image url" name="campground_image" className="form-control" 
                                                value={this.state.campground_image} onChange={this.changeCampgroundImageHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Campground Price: </label>
                                            <input placeholder="Campground Price" name="campground_price" className="form-control" 
                                                value={this.state.campground_price} onChange={this.changeCampgroundPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Campground Description: </label>
                                            <input placeholder="Campground Description" name="campground_description" className="form-control" 
                                                value={this.state.campground_description} onChange={this.changeCampgroundDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCampground}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                </div>
            </div>
        )
    }
}
