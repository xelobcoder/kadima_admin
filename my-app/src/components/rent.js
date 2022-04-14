import React , {Component} from 'react';
import data from "./data.js";
import "../css/rent.css";

export default class ForRent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         headers:'ForRent',
      }
    }

    render() {
        return (
            <div id='properties' className='rent'>
                {
                    data.properties.map(
                        (property)=>(
                            <div className='card' key={property.id}>
                                <div className='card-body'>
                                <div className='property-type-info'>
                                      {property.Type}
                                </div>
                                <div className='property'>
                                    <div className='property-image-div'>
                                        <a href={`/properties/rent/${property.id}`}>
                                            <img src={property.image} alt={property.description}></img>
                                        </a>
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
                                   <a href={`/properties/rent/${property.id}`}>view</a>
                               </button>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        )
    }
}