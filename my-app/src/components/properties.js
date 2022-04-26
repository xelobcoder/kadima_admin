import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";
import "../css/properties.css";
import Headers from "./header";

class Properties extends Component{
    constructor(props){
        super(props)
        this.state = {
            header: "Apartments"
        }
    }
    render(){
        return(
            <div>
                <Headers/>
                <div className="container-fluid bg-warning">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-5 p-2">
                                <input type="search" placeholder="search properties here" className="form-control" id="searchProperties"></input>
                                </div>
                                <div className="col-7 text-dark">
                                <nav className="d-flex" style={{display:"grid",color:"black !important", gridTemplateColumns:"30% 30% auto"}}>
                                    <Link id="Navlink" to="sale">sale </Link>
                                    <Link id="Navlink" to="rent">Rent </Link>
                                    <Link id="Navlink" to="upload">Upload property </Link>
                                </nav>
                            </div> 
                        </div>                   
                    </div>
                </div>
                <div >
                    <Outlet/>
                </div>
           </div>
        )
    }
}

export default Properties;