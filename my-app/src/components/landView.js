import React,{useEffect,useState} from 'react';
import Headers from './header';
import axios from 'axios';
import "../css/landview.css";
import { Link, useNavigate} from 'react-router-dom';

export default function LandView() {
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [lands,setLands] = useState([]);
  const [region,setRegion] = useState([]);
  const [minprice,setMinprice] = useState(0);
  const [maxprice,setMaxprice] = useState(0);
  const [location,setLocation] = useState([]);
  const [qr,setQr] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const URL = "http://localhost:8000/api/uploadsimages";
    const fetch = async () => {
     let results = await axios.get(URL);
     setLands(results.data);
     console.log(results.data);
     setLoading(false);
    }

    fetch();
 }, []);


 

 const handleQuery = (e) => {
   e.preventDefault();
     let data = {
       minprice: minprice,
        maxprice: maxprice,
        location: location,
        region: region
     }
     console.log(data)

     let pushdata = axios.post("http://localhost:8000/api/land/query",data)
     pushdata.then(res => {
       if(res.data === "error") {
         console.log(res.data)
       } else {
         if(res.data.length > 0){
          setLands(res.data);
          setQr("");
         } else {
           setQr("Not match found");
         }
       }
     }).catch ( (err) => {console.log(err)})

 }



 const NavigatetoSingle = function(e) {
   let targetP = e.target.getAttribute("uniquekey");
   navigate(`/viewmore/?id=${targetP}`);
 }


  return (
    <>
    <div className='container-fluid bg-white'>
        <div className='container'>
          <div  className='row'>
            <div className='col p-2'>
              <form id='d-flex' onSubmit={ (e) => handleQuery(e)}>
                 <input className='form-control' type="text" 
                   onChange={ (e) => {setLocation(e.target.value)}}
                 id='location' placeholder='location'/>
                 <input type="text" onChange= {(e) => setRegion(e.target.value)} className='form-control' id='region' placeholder='region or district'/>
                 <input type="number" onChange={(e) => setMinprice(e.target.value)} className='form-control' id='min' placeholder='min-price'/>
                 <input type="number" onChange={(e) => setMaxprice(e.target.value)} className='form-control' id="max" placeholder='max-price'/>
                 <button  className='btn btn-warning'>search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={qr  === "" ? "d-none" : "container-fluid p-2"}>
         <div className='container'>
            <div className='col'>
              {qr}
            </div>
         </div>
      </div>
    <div className='container-fluid mt-3'>
      <div className='container'>
         <div className='row'>
         <div className='col imagecards' >
            {
              lands.map( (land,index) => {
                return(
                  <div className='card'>
                    <div className='card-header'>
                      <img onClick={(e) => NavigatetoSingle(e)} uniqueKey={land._id} src= {`http://localhost:8000/api/v1/landview/single/?id=${land.images.imagesCollection[0]}`} alt={land.topography} className='img-card' />
                    </div>
                    <div className='card-body'>
                      <h2>land for sale at {land.location}</h2>
                      <h2>GH¢ {land.price}</h2>
                      <p>{land.topography}</p>
                    </div>
                    <div className='card-footer'>
                       <img src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAXpp2t.img?w=300&h=225&q=90&m=6&f=jpg&x=2131&y=731&u=t'/>
                    </div>
                  </div>
                )
                })
            }
             </div>
         </div>
      </div>
    </div>
  </>
  )
}
