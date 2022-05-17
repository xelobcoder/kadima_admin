import React,{useEffect,useState} from 'react';
import Headers from './header';
import axios from 'axios';
import "../css/landview.css";
import { Link, useNavigate} from 'react-router-dom';

export default function LandView() {
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [lands,setLands] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const URL = "http://localhost:8000/api/uploadsimages";
    const fetch = async () => {
     let results = await axios.get(URL);
     setLands(results.data);
     setLoading(false);
    }

    fetch();
 }, []);


 const NavigatetoSingle = function(e) {
   let targetP = e.target.getAttribute("uniquekey");
   navigate(`/viewmore/?id=${targetP}`);
 }


  return (
    <div className='container-fluid'>
      <div className='container'>
         <div className='row bg-white p-4 mt-3'>
             <div className='col'>
              {
               loading ? <h2 className='text-primary'>loading....</h2> : null
              }
             </div>
             
         </div>
         <div className='row'>
         <div className='col imagecards' >
               {
                 lands.length === 0 ? <p className='text-black alert-primary'>No land found </p>:
                  (
                    lands.map( (land,index) => {
                      return(
                           <div className='card'>
                             <div className='card-header'>
                               {land.location} for sale at {" "+ land.region}
                             </div>
                             <div className='card-body'>
                                <div id='image-wrapper'>
                                <img onClick={(e) => NavigatetoSingle(e)} uniqueKey={land._id} src= {`http://localhost:8000/api/v1/landview/single/?id=${land.images.imagesCollection[0]}`} alt={land.topography} className='img-card' />
                                </div>
                                <div id="text-wrapper">
                                   {land.topography}
                                </div>
                             </div>
                             <div className='card-footer'>
                                <div id='firstchild'>
                                    <div><span className='text-bold text-capitalize text-danger mr-2'>Dimensions:</span> {land.land_length + " m"} * {land.land_width + " m"}</div>
                                    <div><span className='text-bold text-capitalize text-danger mr-2'>price :</span> {"GHC " + land.price}</div>
                                </div>
                             </div>
                           </div>
                      )
                    })
                  )
               }
             </div>
         </div>
      </div>
    </div>
  )
}
