import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import {Nav} from "react-bootstrap";

export default function  LandSelection() {
  return (
   <div>
     <div className='container-fluid text-dark' style={ {border:"black !important"}}>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item className='p-2'>
                <Link  to="landUpload" className="text-dark" eventKey="link-2">Upload</Link>
            </Nav.Item>
            <Nav.Item className='p-2'>
                <Link to="landView" className="text-dark" eventKey="link-1">View</Link>
            </Nav.Item>
        </Nav>
    </div>
    <div>
        <Outlet/>
    </div>
   </div>
  )
}
