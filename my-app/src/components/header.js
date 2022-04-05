import react, {Component} from "react";
import "../css/header.css";


class Headers extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark p-2 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <a href="/" className="Homepage"> Homepage</a>
                        </div>
                        <div className="col" id="header_list">
                            <ul>
                               <li> <a href="/upload">upload</a></li>
                               <li> <a href="/request">request</a></li>
                               <li> <a href="/analysis">analysis</a></li>
                               <li> <a href="/transactions">transactions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers;