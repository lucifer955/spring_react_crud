import React, { Component } from 'react'
import CampgroundService from '../services/CampgroundService'

export default class ListCampgroundComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            campgrounds: []
        }
        this.addCampground = this.addCampground.bind(this);
        this.editCampground = this.editCampground.bind(this);
        this.deleteCampground = this.deleteCampground.bind(this);
        this.viewCampground = this.viewCampground.bind(this);
    }

    componentDidMount() {
        CampgroundService.getCampgrounds().then((res) => {
        this.setState({campgrounds:res.data})
    });
    }

    addCampground() {
        this.props.history.push("/add-campgrounds/-1");
    }
  
    editCampground(id) {
        this.props.history.push(`/add-campgrounds/${id}`);
    }

    deleteCampground(id) {
        //delete campground
        CampgroundService.deleteCampground(id).then((res) => {
            this.setState({campgrounds : this.state.campgrounds.filter(campground => campground.id !== id)});
        });
    }

    viewCampground(id) {
        this.props.history.push(`/view-campgrounds/${id}`);
    }

    render() {  

        return (
            <>
            <h2 className="text-center">Campgrounds</h2>

            <div className="row mt-2 mb-3">
                <button className="btn btn-primary" onClick={this.addCampground}><i className="fa fa-plus"></i> Add Campground</button>
            </div>
            <div className = "row justify-content-between">
                {
                    this.state.campgrounds.map(
                        (campground) => { return(
                            <div className="col-md-4  col-sm-1 mb-3" key = {campground.id}>
                            <div className="card" >
                                <img src={campground.campground_image} className="card-img-top" alt={campground.campground_image} />
                            <div className="card-body">
                                <h5 className="card-title">{campground.campground_name}</h5>
                                <p className="card-text" style={{height:"50px"}}>{campground.campground_description}</p>
                                <button className="btn btn-warning" onClick={() => this.editCampground(campground.id)}>Update</button>
                                <button className="btn btn-danger ml-1" onClick={() => this.deleteCampground(campground.id)}>Delete</button>
                                <button className="btn btn-info ml-1" onClick={() => this.viewCampground(campground.id)}>View</button>
                            </div>
                          </div>  
                          </div>                          
                        )
                    })
                }
            </div>
        </>
        )
    }
}
