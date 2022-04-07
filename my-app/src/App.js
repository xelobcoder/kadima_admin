import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  Login from "./components/login";
import io from "socket.io-client";
import Request from "./components/request";
import { Routes,Route } from "react-router-dom";
import Homepage from "./components/hompage";
import Properties from "./components/properties";
import Logout from "./components/logout";
import Analysis from "./components/analysis";
import Headers from "./components/header";
import Transactions from "./components/transactions";
import Forsale from "./components/sale";
import ForRent from "./components/rent";
import Uploads from "./components/upload";


const socket = io("http://localhost:8000");


function App() {
  return (
     <div>
        <Headers/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/request" element={<Request/>}></Route>
          <Route path="/properties" element={<Properties/>}>
             <Route path="sale" element={<Forsale/>}></Route>
             <Route path="rent" element={<ForRent/>}></Route>
             <Route path="upload" element={<Uploads/>}></Route>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/transaction" element={<Transactions/>}/>
        </Routes>
     </div>
  )
}

export default App;
