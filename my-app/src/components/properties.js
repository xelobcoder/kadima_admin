import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";
import "../css/properties.css";
import Headers from "./header";

const Navlink = {
   listStyleType: "none",
   color: "blue",
   margin:"10px 20px",
   listStyle:"none !important"
}

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
                <div className="container-fluid" style={{borderBottom: "1px solid lightgray"}}>
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-5 p-1">
                                <input type="search" placeholder="search properties here" className="form-control" id="searchProperties"/>
                                </div>
                                <div className="col-7 text-dark">
                                <nav className="d-flex" >
                                    <Link style={Navlink} to="sale">sale </Link>
                                    <Link style={Navlink} to="rent">Rent </Link>
                                    <Link  style={Navlink} to="upload">Upload property </Link>
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