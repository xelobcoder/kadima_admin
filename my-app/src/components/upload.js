import React, { useState} from 'react';
import "../css/upload.css";
import axios from 'axios';




function Uploads(props) {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [status,setStatus] = useState("");
    const [address,setAddress] = useState("");
    const [region,setRegion] = useState("");
    const [district,setDistrict] = useState("");
    const [area,setArea] = useState("");
    const [categories,setCategories] = useState("");
    const [listing,setListing] = useState("");
    const [gps,setGps] = useState("");
    const [latitude,setLatitude] = useState("");
    const [longitude,setLongitude] = useState("");
    const [bedrooms,setBedrooms] = useState("");
    const [bathrooms,setBathrooms] = useState("");
    const [garages,setGarages] = useState("");
    const [toilets,setToilets] = useState("");
    const [agentNotes,setAgentNotes] = useState("");
    const [type,setType] = useState("");
    const [basements,setBasements] = useState("");
    const [parking,setParking] = useState("");
    const [rooms,setRooms] = useState("");
    const [kitchen,setKitchen] = useState("");
    const [gym,setGym] = useState("");
    const [mediaStudio,setMediaStudio] = useState("");
    const [swimmingPool,setSwimmingPool] = useState("");
    const [terrace,setTerrace] = useState("");
    const [garden,setGarden] = useState("");
    const [courtyard,setCourtyard] = useState("");
    const [balcony,setBalcony] = useState("");
    const [pation,setPation] = useState("");
    const [gas,setGas] = useState("");
    const [water,setWater] = useState("");
    const [electricity,setElectricity] = useState("");
    const [sewage,setSewage] = useState("");
    const [phone,setPhone] = useState("");
    const [trash,setTrash] = useState("");
    const [fire,setFire] = useState("");
    const [cable,setCable] = useState("");
    const [ventilation,setVentilation] = useState("");



    
    
    
     return (       
       <div className='container-fluid'>
         <div className='container'>
            <div className='row' id='row'>
                <div className='col' id='side'>
                  <div>
                      <h2>property Description</h2>
                      <h2>location</h2>
                      <h2>Details</h2>
                      <h2>Amenities</h2>
                      <h2>Media</h2>
                  </div>
                </div>
                <div className='col' id='main'>
                   <form>
                       <section id='descriptionsection'>
                           <div>
                              <label>title</label>
                              <input className='form-control' id="title"  onChange={(e) => setTitle(e.target.value)}></input>
                           </div>
                           <div>
                               <label>description</label>
                               <textarea className='form-control' id="description" onChange={(e) => setDescription(e.target.value)}>

                               </textarea>
                           </div>
                           <div>
                               <label>categories</label>
                               <select className='form-control' id="categories" onChange={(e) => setListing(e.target.value)}>
                                    <option value="">listed in</option>
                                    <option value="sell">sell</option>
                                    <option value="rent">rent</option>
                               </select>
                           </div>
                           <div>
                               <label>status</label>
                                <select className='form-control' id="status" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">market status</option>
                                    <option value="available">available</option>
                                    <option value="sold">sold</option>
                                    <option value="under_contract">under contract</option>
                                    <option value="under_offer">under offer</option>
                                    <option value="rented">rented</option>
                                    <option value="leased">leased</option>
                                    <option value="reserved">reserved</option>
                                    <option value="withdrawn">withdrawn</option>
                                </select>
                           </div>
                           <br></br>
                           <div id="buttonchain">
                                <button className='btn btn-warning mt-2'>next section</button>
                           </div>
                       </section>
                       <section id="address">
                            <div> 
                                <label>address</label>
                                <input className='form-control' id="address" onChange={(e) => setAddress(e.target.value)}></input>
                            </div>
                            <div>
                                <label>region</label>
                                <input className='form-control' id="region" onChange={(e) => setRegion(e.target.value)}></input>
                            </div>
                            <div>
                                <label>district</label>
                                <input className='form-control' id="district" onChange={(e) => setDistrict(e.target.value)}></input>
                            </div>
                            <div>
                                <label>area</label>
                                <input className='form-control' id="area" onChange={(e) => setArea(e.target.value)}></input>
                            </div>
                            <div>
                                <label>gps</label>
                                <input className='form-control' id="gps" onChange={(e) => setGps(e.target.value)}></input>
                            </div>
                            <div>
                                <label>latitude </label>
                                <input className='form-control' id='latitude' onChange={(e) => setLatitude(e.target.value)}/> 
                            </div>
                            <div>
                                <label>longitude</label>
                                <input className='form-control' id='longitude' onChange={(e) => setLongitude(e.target.value)}/>
                            </div>
                            <br></br>
                            <div id="buttonchain">
                                <button className='btn btn-warning mt-2'>previous section</button>
                                <button className='btn btn-warning mt-2'>next section</button>
                            </div>
                       </section>
                       <section id='details'>
                           <div>
                               <label>bedrooms</label>
                                 <input className='form-control' id="bedrooms" onChange={(e) => setBedrooms(e.target.value)}></input>
                                
                           </div>
                           <div>
                                 <label>bathrooms</label>
                                 <input className='form-control' id="bathrooms" onChange={(e) => setBathrooms(e.target.value)}></input>
                           </div>
                           <div>
                               <label>rooms</label>
                                 <input className='form-control' id="rooms" onChange={(e) => setRooms(e.target.value)}></input>
                           </div>
                            <div>
                                <label>parking</label>
                                <input className='form-control' id="parking" onChange={(e) => setParking(e.target.value)}></input>
                            </div>
                            <div>
                                <label>toilet</label>
                                <input className='form-control' id="toilet" onChange={(e) => setToilets(e.target.value)}></input>
                            </div>
                            <div>
                                <label>basements</label>
                                <input className='form-control' id="basements" onChange={(e) => setBasements(e.target.value)}></input>
                            </div>
                            <div>
                                <label>garages</label>
                                <input className='form-control' id="garages" onChange={(e) => setGarages(e.target.value)}></input>
                            </div>
                            <div>
                                <label>type</label>
                                <input className='form-control' id="type" onChange={(e) => setType(e.target.value)}></input>
                            </div>
                            <div>
                               <label>Agent Notes</label>
                                 <textarea className='form-control' id="agentNotes" onChange={(e) => setAgentNotes(e.target.value)}></textarea>
                            </div>
                            <br></br>
                            <div id="buttonchain">
                               <button className='btn btn-warning mt-3'>next section</button>
                            </div> 
                       </section>
                       <section id='amenities'>
                          <div>
                             <label>interior details</label>
                             <div>
                                 <div id="selector">
                                    <input type="checkbox" value="kitchen equipped" onChange={(e) => setKitchen(e.target.value)}/>
                                    <label>kitchen equipped</label>
                                 </div>
                                <div id='selector'>
                                    <input type="checkbox" value="gym" onChange={(e) => setGym(e.target.value)} />
                                    <label>gym</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="media studio" onChange={(e) => setMediaStudio(e.target.value)}/>
                                    <label>media studio</label>
                                </div>
                             </div>
                             <div>
                                 <label>outdoor</label>
                                <div id='selector'>
                                    <input type="checkbox" value="pool" onChange={(e) => setSwimmingPool(e.target.value)}/>
                                    <label>pool</label>
                                </div>
                                <div id='selector'> 
                                    <input type="checkbox" value="garden" onChange={(e) => setGarden(e.target.value)}/>
                                    <label>garden</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="balcony" onChange={(e) => setBalcony(e.target.value)}/>
                                    <label>balcony</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="terrace" onChange={(e) => setTerrace(e.target.value)}/>
                                    <label>terrace</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="patio" onChange={(e) => setPation(e.target.value)}/>
                                    <label>patio</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="courtyard" onChange={(e) => setCourtyard(e.target.value)}/>
                                    <label>courtyard</label>
                                </div>
                             </div>
                             <div>
                                <label>utilities</label>
                                <div id='selector'>
                                    <input type="checkbox" value="gas" onChange={(e) => setGas(e.target.value)}/>
                                    <label>gas</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="electricity" onChange={(e)  => setElectricity(e.target.value)}/>
                                    <label>electricity</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="water" onChange={(e) => setWater(e.target.value)}/>
                                    <label>water</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="sewer" onChange={(e) => setSewage(e.target.value)}/>
                                    <label>sewer</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="trash" onChange={(e) => setTrash(e.target.value)}/>
                                    <label>trash</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="cable" onChange={(e) => setCable(e.target.value)}/>
                                    <label>cable</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="internet" />
                                    <label>internet</label> 
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="ventilation" onChange={(e) => setVentilation(e.target.value)}/>
                                    <label>ventilation</label>
                                </div>
                                <div id='selector'>
                                    <input type="checkbox" value="fireplace" onChange={(e) => setFire(e.target.value)}/>
                                    <label>fireplace</label>
                                </div>
                             </div>
                          </div>
                       </section>
                   </form>
                </div>
            </div>
         </div>
       </div>
    )
}
  


export default Uploads;
