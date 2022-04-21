import React,{useState} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { InputGroup,FormControl,Button,Form, ButtonGroup} from "react-bootstrap";


function Uploadimages() {
  const location = useLocation().pathname.split(":")[1];

  return (
    <div>
       <div>
        <h1 className='alert alert-primary p-4' style={{borderLeft: "5px solid red"}}>Upload images</h1>
        <p>You can upload multiple images</p>
          <Form  encType='multipart/form-data' method='post' action='http://localhost:8000/api/uploadsimages'>
            <InputGroup className="mb-3">
             <FormControl value={location} type="hidden" name="_id" id='_id'  />
              <FormControl type='file'
                placeholder="example: url.jpg"
                required 
                multiple
                id="files"
                name="files"
                accept='.jpeg,.png,.jpg'
              />
             </InputGroup>
              <ButtonGroup className='secondary'>
              <Button type="button" className="btn mr-5 btn-outline-success text-white">preview</Button>
              <Button type="submit"    className="btn btn-outline-warning text-dark">submit</Button>
           </ButtonGroup>
          </Form>
       </div>
       <div>
          {/* {
           images.map( (image) => {
             return(
               <img src={image.src}/>
             )
           })
          } */}
       </div>
    </div>
  )
}


export default  Uploadimages;