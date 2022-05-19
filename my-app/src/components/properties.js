import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";
import "../css/properties.css";
import Headers from "./header";
import axios  from "axios";

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
            header: "Apartments",
            location: "",
            region: "",
            minprice: "",
            maxprice: "",
        }
    }

    handleQuery = (e) => {
        e.preventDefault();
          let data = {
            minprice: this.state.minprice,
             maxprice: this.state.maxprice,
             location: this.state.location,
             region: this.state.region
          }
          console.log(data)
     
          let pushdata = axios.post("http://localhost:8000/api/land/query",data)
          pushdata.then(res => {
            if(res.data === "error") {
              console.log(res.data)
            } 
          }).catch ( (err) => {console.log(err)})
     
      }
    render(){
        return(
            <div>
                <Headers/>
                <div className="container-fluid" style={{borderBottom: "1px solid lightgray"}}>
                    <div className="container">
                        <div className="row" id="navhead">
                            <div className="col">
                            <form id='d-flex' onSubmit={ (e) => this.handleQuery(e)}>
                                <input className='form-control' type="text" 
                                onChange={ (e) => {this.setState({location: e.target.value})}}
                                id='location' placeholder='location'/>
                                <input type="text" onChange= {(e) => this.setState({region: e.target.value})} className='form-control' id='region' placeholder='region or district'/>
                                <input type="number" onChange={(e) => this.setState({minprice:e.target.value})}className='form-control' id='min' placeholder='min-price'/>
                                <input type="number" onChange={(e) => this.setState({maxprice: e.target.value})} className='form-control' id="max" placeholder='max-price'/>
                                <button  className='btn btn-warning'>search</button>
                            </form>
                            </div>
                            <div className="col"  id="navhead-child">
                                    <nav className="d-flex" >
                                        <Link id="Navlink" to="rent">Rent </Link>
                                        <Link  id="Navlink" to="upload">Upload property </Link>
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