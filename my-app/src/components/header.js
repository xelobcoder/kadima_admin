import react, {Component} from "react";
import { NavLink, Outlet,Link } from "react-router-dom";
import "../css/header.css";


class Headers extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark p-3 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <Link to ="/hompage" className="Homepage"> Homepage</Link>
                        </div>
                        <div className="col-6" id="header_list">
                            <nav>
                               <NavLink className="NavLink" to="/properties">Buildings
                               </NavLink>
                               <NavLink className="NavLink" to="/request">Lands</NavLink>
                               <NavLink className="NavLink" to="/analysis">Analysis</NavLink>
                               <NavLink className="NavLink" to="/login">Login</NavLink>
                                 <NavLink className="NavLink" to="/transaction">Transactions</NavLink>
                               <NavLink className="NavLink" to="/logout">Logout</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers;