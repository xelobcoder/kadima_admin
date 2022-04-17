import React, {Component} from "react";
import ForRent from "./rent";
import Forsale from "./sale";



class Homepage extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div>
                    <h3>Rent</h3>
                    <ForRent/>
                </div>
            </div>
        )
    }
}


export default  Homepage;