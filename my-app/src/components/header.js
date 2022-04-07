import react, {Component} from "react";
import { NavLink, Outlet } from "react-router-dom";
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
                        <div className="col-6" id="header_list">
                            <nav>
                               <NavLink className="NavLink" to="/properties">Properties
                               </NavLink>
                               <NavLink className="NavLink" to="/request">Request</NavLink>
                               <NavLink className="NavLink" to="/analysis">Analysis</NavLink>
                               <NavLink className="NavLink" to="/login">Login</NavLink>
                               <NavLink className="NavLink" to="/logout">Logout</NavLink>
                               <NavLink className="NavLink" to="/transaction">Transaction</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers;