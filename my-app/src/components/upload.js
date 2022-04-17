import React, { Component } from 'react'
// import "../css/upload.css";


class Uploads extends Component {
  render() {
    return (       
          <div className="col" style={{margin: "0px 100px"}}>
              <h4 className='text-lead mt-4 text-capitalize text-dark'>upload details of new Property</h4>
              <hr/>
              <div className='col '>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Property Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Property Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Property Address" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Property Description</label>
                        <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Property Description" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Property Price</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Property Price" />
                    </div>
                    <div className='form-group'>
                        <label for="GPSAddress">GPS Address</label>
                        <input type="text" className="form-control" id="GPSAddress" placeholder="Enter GPS Address" />
                    </div>
                    <div className='alert alert-light' id='info'>For Housing structures only</div>
                    <div className="form-group" id='gridLayer' >
                        <div className='mr-2'>
                            <label for="marketStatus">market status</label>
                            <select className='form-control' id="marketStatus">
                                <option>Available</option>
                                <option>Sold</option>
                            </select>
                        </div>
                        <div className='ml-2'>
                            <label for="type">Property type</label>
                            <select className='form-control' id="type">
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Land</option>
                            </select>
                        </div>
                        <div>
                            <label for="bedrooms">Bedrooms</label>
                            <select className='form-control' id="bedrooms">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div>  
                            <label for="bathrooms">Bathrooms</label>
                            <select className='form-control' id="bathrooms">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                     </div>
                    <div className="form-group">
                     <label for="toliet"> toliet</label>
                        <select className='form-control' id="toliet">
                            <option>Yes
                            </option>
                            <option>No</option>
                        </select>
                     </div>
                     <div className="form-group">
                            <label for="parking">Parking</label>
                            <select className='form-control' id="parking">
                                <option>Yes
                           </option>
                            <option>No</option>
                         </select>
                    </div>
                    <div className='form-group'>
                        <label for="phone Number1">Phone Number 1</label>
                        <input type="tel" className="form-control" multiple id="phone Number" placeholder="Enter Phone Number" /> 
                    </div>
                    <div className='form-group'>
                        <label for="phone Number2">Phone Number 2</label>
                        <input type="tel" className="form-control" multiple id="phone Number" placeholder="Enter Phone Number" />
                    </div>
                    <button type='button' className='btn btn-primary mt-3'>
                        Upload
                    </button>
                </form>
              </div>
          </div>
    )
  }
}

export default Uploads;
