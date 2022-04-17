import React from 'react';
import {Alert,Button,Form,Input, ListGroup} from "react-bootstrap";

const colorLeft ={
  fontWeight: 400,
  borderLeft: "3px solid blue",
  fontSize: "1.2em"
}
const inputModifications = {
    border: "2px solid red !important",
}

const split = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "40px !important",
}

const filter = {
    border: "2px solid lightseagreen !important",
    height: "40px !important",
    width: "95%",
}

const leftbar = {
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
}

export default function LandUpload() {
  return (
    <div>
      <div className='container'>
       <div className='row'>
           <div className='col-8 mt-2'>
               <div className='alert alert-primary' style={colorLeft}>
                   fill in to upload land
               </div>
               <div className='form-wrapper'>
                   <form>
                    <div className='form-group'>
                        <label htmlFor="gps">GPS location</label>
                        <input className='form-control' placeholder='GA-543-0153' id='gpsLocation' type="number"/>
                    </div>
                    <div className="form-group" id='dimensions'>
                        <div>
                        <label htmlFor="length">length</label>
                            <input type="number" style={inputModifications} className="form-control" id="length" placeholder="Enter length" />
                        </div>
                        <div className='times'>
                            X
                        </div>
                        <div>
                        <label htmlFor="width">width</label>
                            <input type="number" className="form-control" id="width" placeholder="Enter width" />
                        </div>
                     </div>
                     <div className='form-group'>
                         <label htmlFor="location">location</label>
                         <input type="string" className="form-control" id="location" placeholder='Kanvile'/>
                     </div>
                     <div className='form-group'>
                         <label htmlFor="district">district</label>
                         <input type="string" className='form-control' id='district' placeholder='Accra Metro' />
                     </div>
                     <div>
                         <label htmlFor="region">region</label>
                         <input type="string" className='form-control' id="region" placeholder='Northern region'/>
                     </div>
                     <div>
                         <label>Land topography</label>
                         <textarea className='form-control' id='topography' placeholder='Describe topography of land'></textarea>
                     </div>
                     <div className='form-group'>
                            <label htmlFor="price">price</label>
                            <input type="number" className="form-control" id="price" placeholder="Enter price" />
                     </div>
                        <div className='form-group'>
                            <label htmlFor="marketStatus">market status</label>
                            <input type="string" className="form-control" id="marketStatus" placeholder='Available'/>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-block btn-warning mt-3 '>save</button>
                        </div>
                   </form>
               </div>
           </div>
              <div className='col-4 mt-2' style={leftbar}>
                  <Alert variant='primary'>
                        <Alert.Heading>Note!!</Alert.Heading>
                        <p>
                           All saved transaction are recorded with the timestamps. you can filter 
                           the saved lands by region,district,cost and market status.
                           click on the link to show all by  regions.
                           
                        </p>
                        <p>
                            <Button variant='outline-primary'>show all</Button>
                        </p> 
                  </Alert>
                  <ListGroup className='mb-3'>
                      <ListGroup.Item>
                          Northern Region
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Greater Accra Region
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Ashanti Region
                      </ListGroup.Item>
                  </ListGroup>
                  <Form>
                      <Form.Group id="filter" style={split}>
                             <Form.Control style={filter} id="Fregion" placeholder="region"/>
                             <Form.Control style={filter} id="Fdistrict" placeholder="district"/>
                     </Form.Group>
                     <Form.Group controlId='cost-filter' className='mt-2' style={split }>
                            <Form.Control style={filter} placeholder="min-cost"/>
                            <Form.Control style={filter} placeholder="max-cost"/>
                     </Form.Group>
                     <Form.Group className='mt-3 d-flex justify-content-end'>
                         <Button>Filter</Button>
                     </Form.Group>
                  </Form>
              </div>
       </div>
    </div>
    </div>
  )
}
