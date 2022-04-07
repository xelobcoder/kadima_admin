import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  Login from "./components/login";
import Request from "./components/request";
import { Routes,Route } from "react-router-dom";
import Homepage from "./components/hompage";
import Uploads from "./components/upload";
import Logout from "./components/logout";
import Analysis from "./components/analysis";
import Transactions from "./components/transactions";


function App() {
  return (
     <div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/request" element={<Request/>}></Route>
          <Route path="/upload" element={<Uploads/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/transaction" element={<Transactions/>}/>
        </Routes>
     </div>
  )
}

export default App;
