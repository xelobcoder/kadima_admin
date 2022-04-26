import axios from "axios";


const fileupload = function (payload) {
  let jwt = localStorage.getItem("accesstoken")
  let jwtRefreshToken = localStorage.getItem("resfreshToken");
  let authorization = `bearer ${jwt}`;
  let BASEURL = "http://localhost:8000/v1/api/uploadbuildingimages";
  
  
  const postpayload = axios(BASEURL, {
    method: "POST",
    data: payload,
    headers: {
      "content-type": "multipart/formdata",
      "auhtorization" : authorization
    }
  })
  
  postpayload.then((t) => {
    console.log(t);
  }).catch ( (err) => {console.log(err)})
}


export default  fileupload;