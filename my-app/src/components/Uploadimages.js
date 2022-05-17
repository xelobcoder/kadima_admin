import React,{useState} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { InputGroup,FormControl,Button,Form, ButtonGroup} from "react-bootstrap";


function Uploadimages() {
  const location = useLocation().pathname.split(":")[1];

  return (
    <div className='p-4 bg-white'>
       <div>
        <h1 className='alert alert-info p-3' style={{borderLeft: "5px solid red"}}>Upload images</h1>
        <p>You can upload multiple images</p>
          <Form  encType='multipart/form-data' method='post' action='http://localhost:8000/api/uploadsimages'>
            <InputGroup className="mb-3">
             <FormControl value={location} type="hidden" name="_id" id='_id'/>
              <FormControl style={{display:"block"}} type='file'
                placeholder="example: url.jpg"
                required 
                multiple
                id="files"
                name="files"
                accept='.jpeg,.png,.jpg'
              />
             </InputGroup>
              <ButtonGroup className='secondary'>
              <Button type="submit"    className="btn btn-outline-warning text-dark">submit</Button>
           </ButtonGroup>
          </Form>
       </div>
    </div>
  )
}


export default  Uploadimages;