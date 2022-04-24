import React , {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/rent.css";
import axios from 'axios';



export default function Rent() {
    const [property,setProperty] = useState([]);

    useEffect( ()=>{
       const fetchData = async () => {
           let results = await axios.get('http://localhost:8000/api/properties');
           setProperty(results.data);
       }
       fetchData();
    },[])

    return (
        <div id='properties' className='rent'>
            {
                property.map(
                    (property)=>(
                        <div className='card' key={property.id} title={`created: ${property.date_added}, updated on: ${property.date_update}`}>
                            <div className='card-body'>
                            <div className='property-type-info'>
                                  {property.Type}
                            </div>
                            <div className='property'>
                                <div className='property-image-div'>
                                    <Link to={`/properties/rent/${property.id}`}>
                                        <img src={property.image} alt={property.description}></img>
                                    </Link>
                                </div>
                                <div className='property-route-left'>
                                    <div className='property-info'>
                                         {property.district},{property.location}
                                    </div>
                                    <div className='property-description'>
                                        {property.description}
                                    </div>
                                    <div className='property-price'>
                                        <strong>{property.Price}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                           <button type='button' className='btn btn-var-primary'>
                               <Link to ={`/properties/rent/${property.id}`}>view</Link>
                           </button>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )
} 