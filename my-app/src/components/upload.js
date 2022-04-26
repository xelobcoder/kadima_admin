import React, { useState} from 'react';
import "../css/upload.css";
import axios from 'axios';




function Uploads(props) {
    const [name, setname] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [area, setArea] = useState("");
    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [toilet, setToilet] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [parking, setParking] = useState("");
    const [type, setType] = useState("");
    const [marketStatus, setMarketStatus] = useState("");
    const [gps, setGps] = useState("");
    const [address, setAddress] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    
    const handleSubmit = (e) => {
    e.preventDefault();
        const payload = {
            name,
            price,
            description,
            area,
            region,
            district,
            bathrooms,
            toilet,
            bedrooms,
            parking,
            type,
            marketStatus,
            gps,
            address,
            phone: [phone1, phone2],
        }
        const BASEURL = "http://localhost:8000/api/v1/property";
        const postPayload = axios(BASEURL, {
            method: "POST",
            data: payload,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            }
        })
        postPayload
        .then((t) => {
            console.log(t);
        }).catch((e) => { console.log(e) });
}
    
    
    
     return (       
        <div className='container'>
            <div className="col-10" style={{margin: "0px 100px"}}>
              <h4 className='alert alert-info p-3 text-lead mt-4 text-capitalize text-dark'>upload details of new Property</h4>
            <hr/>
            <div className='col'>
                 <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Property Name</label>
                             <input type="text"
                                 className="form-control" id="name"
                                 onChange={(e) => setname(e.target.value)}
                                 aria-describedby="propertyName" required placeholder="Enter Property Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Property Address</label>
                             <input type="text" className="form-control"
                                 onChange={(e) => setAddress(e.target.value)} required id="address" placeholder="Enter Property Address" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Property Description</label>
                             <textarea type="text"
                                 onChange={(e) => setDescription(e.target.value)}
                                 className="form-control" id="description" required placeholder="Enter Property Description" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Property Price</label>
                             <input type="number" onChange={(e) => setPrice(e.target.value)}
                        className="form-control" id="price" placeholder="Enter Property Price" required />
                    </div>
                    <div className='form-group'>
                        <label for="GPSAddress">GPS Address</label>
                             <input type="text" className="form-control"
                                 onChange={(e) => setGps(e.target.value)}
                            id="gps" placeholder="Enter GPS Address" />
                    </div>
                    <div className='alert alert-info' id='info'>For Housing structures only</div>
                    <div className="form-group" id='gridLayer' >
                        <div className='mr-2'>
                            <label for="marketStatus">market status</label>
                                 <select className='form-control' required id="marketStatus" onChange={(e) => setMarketStatus(e.target.value)}>
                                <option>options</option>
                                <option>Available</option>
                                <option>Sold</option>
                            </select>
                        </div>
                        <div className='ml-2'>
                            <label for="type">Property type</label>
                            <select className='form-control' id="type" required onChange={(e) =>setType(e.target.value)}>
                                <option>options</option>
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Land</option>
                            </select>
                        </div>
                        <div>
                            <label for="bedrooms">Bedrooms</label>
                                 <select className='form-control' required id="bedrooms" onChange={(e) => setBedrooms(e.target.value)}>
                                <option>options</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value="more">more</option>
                            </select>
                        </div>
                        <div>  
                            <label for="bathrooms">Bathrooms</label>
                                 <select className='form-control' required id="bathrooms" onChange={(e) => setBathrooms(e.target.value)}>
                                <option>options</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value="more">more</option>
                            </select>
                        </div>
                     </div>
                    <div className="form-group">
                     <label for="toliet"> toliet</label>
                        <select className='form-control' required id="toliet" onChange={(e) => setToilet(e.target.value)}>
                              <option>options</option>
                                 <option>Yes
                            </option>
                            <option>No</option>
                        </select>
                     </div>
                     <div className="form-group">
                            <label for="parking">Parking</label>
                            <select className='form-control' id="parking" required onChange={(e) => setParking(e.target.value)}>
                            <option>default</option>
                            <option>Yes</option>
                            <option>No</option>
                         </select>
                    </div>
                    <div className='form-group'>
                        <label for="phone Number1">Phone Number 1</label>
                             <input type="tel" inputMode='tel'
                                onChange={(e) => setPhone1(e.target.value)}
                            className="form-control" min={10} max={10} required multiple id="phone Number_1" placeholder="Enter Phone Number" /> 
                    </div>
                    <div className='form-group'>
                        <label for="phone Number2">Phone Number 2</label>
                             <input inputMode='tel' type="tel" max={10} min={10}
                                 className="form-control" multiple id="phoneNumber_2"
                                 onChange={(e) => setPhone2(e.target.value)} 
                            placeholder="Enter Phone Number" />
                    </div>
                    <div className='form-group'>
                            <label>regions</label>
                             <select className='form-control' required id='region' onChange={(e) => setRegion(e.target.value)}>
                                 <option>select region</option>
                                <option value={"Northern Region"}>Northern Region</option>
                                <option value="Central Region">Central Region</option>
                                <option value="Eastern Region">Eastern Region</option>
                                <option value="Western Region">Western Region</option>
                                <option value="Volta Region">Volta Region</option>
                                <option value="Brong Ahafo Region">Brong Ahafo Region</option>
                                <option value="Upper East Region">Upper East Region</option>
                                <option value="Upper West Region">Upper West Region</option>
                                <option value="Ashanti Region">Ashanti Region</option>
                                <option value="Greater Accra Region">Greater Accra Region</option>
                                <option value="Savannah Region">Savannah Region</option>
                                <option value="North East Region">North East Region</option>
                                <option value="Bono Region">Bono Region</option>
                                <option value="Ahafo Region">Ahafo Region</option>
                                <option value ="Western North Region">Western North Region</option>
                            </select>
                    </div> 
                    <div className='form-group'>
                            <label>District</label>
                             <input className='form-control'
                               onChange={(e) => setDistrict(e.target.value)}     
                            id='district' placeholder='Enter district name?' required />
                    </div> 
                    <div className='form-group'>
                            <label>Area Location</label>
                             <input className='form-control'
                                onChange={(e) => setArea(e.target.value)}
                            placeholder='location' required id='area' />
                    </div> 
                    <button type='submit' className='btn btn-primary mt-3'>
                        Upload
                    </button>
                </form>
              </div>
          </div>
        </div>
    )
}
  


export default Uploads;
