import React,{useEffect,useState} from 'react';
import axios from "axios";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import  {Carousel } from 'react-responsive-carousel'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/viewmore.css";
import Headers from './header';
import Agents from './agents';



export default function ViewMore() {
  const path = window.location.href.split("=")[1];
  const [loading,setLoading] = useState(true);
  const [image,setImage] = useState({});
  const [pictures,setPictures] = useState([]);
  const [error,setError] = useState(false);
  const [current,setCurrent] = useState(0);

 

  useEffect(() => {
    let getdata = axios.get(`http://localhost:8000/api/v1/landview/all/?id=${path}`);
    getdata.then(res => {
      setImage(res.data);
      console.log(res.data);
      setPictures(res.data.images.imagesCollection);
    }).catch ( (err) => {console.log(err)})
    
  }, [])

  
  return (
    <div>
      <Headers/>
      <div className="container">
        <div className="row" id='viewmore'>
             <div className='mainbar'>
                <div>
                  <AwesomeSlider id="slider" animation="foldOutAnimation">
                      {
                        pictures.map( (pic,index) => {
                          return (
                            <div id='img'  data-src={`http://localhost:8000/api/v1/landview/single/?id=${pic}`} />
                        )
                      })
                      }
                    </AwesomeSlider>
                </div>
                <div className='sideer'>
                  <h5>Address</h5>
                  <div id='child'>
                    <div id='childr'>
                        <h6>location</h6>
                        <p>{image.location}</p>
                    </div>
                    <div id='childr'>
                        <h6>region</h6>
                        <p>{image.region}</p>
                    </div>
                    <div id='childr'>
                        <h6>district</h6>
                        <p>{image.district}</p>
                    </div>
                    <div id='childr'>
                        <h6>Gps</h6>
                        <p>{image.gps_location}</p>
                    </div>
                  </div>
                </div>
                <div className='sidee'>
                  <h5>topography</h5>
                   {
                     image.topography
                   }
                </div>
                <div className='sidee'>
                  <h5>Dimensions</h5>
                   {
                     image.land_length + " m "
                   }
                   * 
                   {
                    + " " +image.land_width + " m"
                   }
                </div>
             
             </div>
             <div className='sidebar-side'>
                <Agents url="https://bobbyhadz.com/images/blog/react-pass-object-as-props/banner.webp" name="Micheal Jordan"/>
             </div>
        </div>
    </div>
    </div>
  )
}
