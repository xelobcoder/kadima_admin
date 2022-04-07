import react, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";


class Headers extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark p-3 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <a href="/" className="Homepage"> Homepage</a>
                        </div>
                        <div className="col" id="header_list">
                            <nav>
                               <NavLink className="NavLink" to="/upload">upload</NavLink>
                               <NavLink className="NavLink" to="/request">Request</NavLink>
                               <NavLink className="NavLink" to="/analysis">analysis</NavLink>
                               <NavLink className="NavLink" to="/login">login</NavLink>
                               <NavLink className="NavLink" to="/logout">logout</NavLink>
                               <NavLink className="NavLink" to="/transaction">transaction</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers;