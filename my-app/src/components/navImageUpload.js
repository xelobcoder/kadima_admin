import React,{useState,useEffect,useCallback} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { InputGroup, FormControl, Button, Form, ButtonGroup } from "react-bootstrap";
import Headers from './header';
import {useDropzone} from 'react-dropzone';
import "../css/drop.css";
import fileUpload from "../api/fileupload.js";


function Uploadimages() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles)
    },
    multiple: true,
  })

  useEffect(() => {
    if (files.length !== 0) {
      let formdata = new FormData();
      files.forEach((file) => {
        formdata.append("files", file);
      })
      fileUpload(formdata);
    }
  }, [files])
  
  
  const handlePreview = function (e) {
    console.log(files.map((file) => {
      const preview = URL.createObjectURL(file);
      return preview;
    }))
  }
  
  const location = useLocation().pathname.split("/")[1];
  
  
  
  
  const images = files.map(file => (
    <div key={file.name} className="p-3 bg-white" style={{borderRadius:"10px",display:"flex",justifyContent:"justify-content-center"}}>
      <img src={file.preview} alt={file.name}
        style={{
          height: "200px", width: "350px",
          border: "1px solid lightgray", borderRadius: "10px"
        }} />
    </div>
  ));
  

  return (
    <div>
      <div className='col-10'>
        <Form  encType='multipart/form-data' method='post' action='http://localhost:8000/api/uploadsimages'>
          <InputGroup  {...getRootProps()} id="drop-area" className="mb-3 drop-file"  >
            <div className='d-flex justify-content-center' >
              <h3>Drops files here</h3>
            </div>
            <div>
              <FormControl value={location} type="hidden" name="_id" id='_id'  />
                <FormControl {...getInputProps()} type='file'
                    placeholder="example: url.jpg"
                    required 
                    multiple
                    id="files"
                    name="files"
                  accept='.jpeg,.png,.jpg'
               />
              <div className='text-primary d-flex justify-content-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
              <div className='text-primary d-flex justify-content-center' >
                <Button variant="primary" type="button" className='bg-white text-dark'>browse files</Button>
              </div>
            </div>
          </InputGroup>
          <ButtonGroup className='secondary'>
              <Button type="button" onClick={(e) => handlePreview(e)} className="btn mr-5 btn-outline-success text-white">preview</Button>
              <Button type="submit"    className="btn btn-outline-warning text-dark">submit</Button>
           </ButtonGroup>
          </Form>
      </div>
      <div className='mt-4' style={{display:"grid",gridTemplateColumns: "2fr 2fr 2fr",gridGap: "20px 20px",backgroundColor:"whitesmoke",padding:"30px 30px"}}>
        {images}
      </div>
    </div>
  )
}


export default  Uploadimages;