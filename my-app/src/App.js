import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  Login from "./components/login";
// import io from "socket.io-client";
import "./css/index.css";
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
import LandView from "./components/landView";
import LandUpload from "./components/landUpload";
import Translands from "./components/Translands";
import Uploadimages from "./components/Uploadimages";
import Layout from "./components/Layout";
import ViewMore from "./components/ViewMore";
function App() {
  return (
     <div>
        <Routes>
           <Route index element={<Login/>}></Route>
           <Route path="/"  element={<Layout />}>
           <Route path="/viewmore/" element = {<ViewMore/>}/>
           <Route path="/request" element={<Request/>}>
               <Route index element={<LandView/>} />
               <Route path="landUpload" element={<LandUpload/>} />
               <Route path="landView" element={<LandView/>} />
               <Route path="Translands" element={<Translands/>}>
                  <Route path="Uploadimages/:key" element={<Uploadimages/>}>
               </Route>
              
           </Route>
           </Route>
            <Route path="/properties" element={<Properties/>}>
               <Route path="sale" element={<Forsale/>}></Route>
               <Route index path="rent" element={<ForRent/>}></Route>
               <Route path="upload" element={<Uploads/>}></Route>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/transaction" element={<Transactions/>}/>
            <Route path="/logout" element={<Logout/>}/>
            </Route> 
        </Routes>
     </div>
  )
}

export default App;
