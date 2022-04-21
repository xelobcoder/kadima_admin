import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import { NavLink, Outlet } from 'react-router-dom';
import {Table} from "react-bootstrap";
import "../css/table.css";


function Translands() {
    const [lands, setLands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let url = "http://localhost:8000/api/v1/properties/incomplete";
            let results=  await axios.get(url);
            setLands(results.data);
            setLoading(false);
        };
        fetchData();

        console.log(lands);
    }, []);


return (
<div>
<div className='container mt-2'>
    {
        loading ? <h2 className='text-primary'>loading....</h2> :
        (
          lands.length === 0 ? <p className='text-primary'>
            No incomplete land found
          </p> :
          (
            <Table bordered hover>
            <thead style={{fontWeight: "400",color:"gray",fontSize:"15px",textTransform: "capitalize"}} className='p-2 text-lead'>
                <tr>
                <th>Customer id</th>
                <th>createdAt</th>
                <th>location</th>
                <th>district</th>
                <th>region</th>
                <th>price(GHS)</th>
                <th>gps location</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {
                lands.map( (land,index) => {
                return (
                    <tr key={land._id} className="text-secondary">
                        <td className='p-3 text-danger'>{index+1}.{land._id}</td>
                        <td className='p-3'>{land.createdAt}</td>
                        <td className='p-3'>{land.location}</td>
                        <td className='p-3'>{land.district}</td>
                        <td className='p-3'>{land.region}</td>
                        <td className='p-3'>{land.price}</td>
                        <td className='p-3'>{land.gps_location}</td>
                        <td>
                            <button className='btn btn-primary btn-sm'>
                                <NavLink to={`Uploadimages/:${land._id}`} className="text-dark" >
                                    upload images
                                </NavLink>
                            </button>
                        </td>
                    </tr>
                )
                })
            }
            </tbody>
         </Table>
          )
        )
    }
</div> 
<div className='container' id="upload-images">
   <Outlet/>
</div>
<div className='container' id="images-outlet">
    
</div>
</div>

    )

}




export default Translands;

