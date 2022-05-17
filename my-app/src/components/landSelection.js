import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import {Nav} from "react-bootstrap";
import "../css/header.css";


export default function  LandSelection() {
  return (
   <div>
     <div id='landselection' className='container-fluid text-dark' style={ {border:"black !important"}}>
        <Nav id='child' variant="tabs" defaultActiveKey="/home">
            <Nav.Item id="child-tab" >
                <Link  to="landUpload"id='landselectionchild' className="text-dark" >Upload</Link>
            </Nav.Item>
            <Nav.Item id="child-tab" >
                <Link  to="Translands" id='landselectionchild' className="text-dark">Incomplete Uploads</Link>
            </Nav.Item>
            <Nav.Item id="child-tab" >
                <Link to="landView" id="landselectionchild" className="text-dark" >View</Link>
            </Nav.Item>
        </Nav>
    </div>
    <div>
        <Outlet/>
    </div>
   </div>
  )
}
