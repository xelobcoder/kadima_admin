import React, { Component } from 'react';
import NavImageUpload from './navImageUpload';
import Headers from './header';

export default class Transactions extends Component{
    render(){
        return(
            <div>
                <Headers />
                <div className='container'>
                    <NavImageUpload/>
                </div>
            </div>
        )
    }
}
