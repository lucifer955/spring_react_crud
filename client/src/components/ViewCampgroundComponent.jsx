import React, { Component } from 'react'
import CampgroundService from '../services/CampgroundService'

export default class ViewCampgroundComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            campground: []
        }
    }

    componentDidMount() {
        CampgroundService.getCampgroundId(this.state.id).then((res) => {
            this.setState({campground: res.data});
        })
    }
    
    render() {

        
        return (
            <div className="row justify-content-center mt-3">
                <div className="col-8">
                    <h3 className="text-center mt-3 mb-3">View Campground Page</h3>
                    <div className="card" >
                        <img src={this.state.campground.campground_image} className="card-img-top" alt={this.state.campground.campground_image} />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.campground.campground_name}</h5>
                                <p className="card-text" style={{height:"50px"}}>{this.state.campground.campground_description}</p>
                                <div className="row justify-content-center">
                                    <button className="btn btn-warning" onClick={() => this.editCampground(this.state.campground.id)}>Update</button>
                                    <button className="btn btn-danger ml-1" onClick={() => this.deleteCampground(this.state.campground.id)}>Delete</button>
                                </div>

                            </div>
                    </div> 
                </div>
            </div>
        )
    }
}
