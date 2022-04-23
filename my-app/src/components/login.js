import React ,{useState,useRef,useEffect} from 'react';
import {Navigate, useNavigate}  from "react-router-dom";
import {Form,Button} from 'react-bootstrap';
import "../css/login.css";
import axios from 'axios';


function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [secretQuestion,setSecretQuestion] = useState('');
  const [secretAnswer,setSecretAnswer] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const [disable,setDisable] = useState(true);
  const [validPass,setValidPass] = useState(false);
  const [validated,setValidated] = useState(false);
  const userRef = useRef();
  const passRef = useRef();
  let navigate = useNavigate();

//   handleers
  const handleUsername = (e) => {
    setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        let value = e.target.value;
        setPassword(value);
    }
  const handleSecretQuestion = (e) => {
    setSecretQuestion(e.target.value);
    }
  const handleSecretAnswer = (e) => {
    setSecretAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        username: username,
        password: password,
        question: secretQuestion,
        answer: secretAnswer
      }
      let getdata = axios.post('http://localhost:8000/api/adminlogin',payload)
      getdata.then( (response) => {
          let result = response.data;
          console.log(response?.config?.data);
         if(Object.keys(result)[0] === "credential"){
              setErrorMessage(result.credential);
              setError(true);
              console.log("w",result);
         } else {
            setError(false);setErrorMessage('');setValidPass(true);setValidated(true);
             let token = result.token;
             localStorage.setItem('token', token);
             navigate("/");
         }
      }).catch( (error) => { console.log(error)});
        
  }


  useEffect( ()=> {
    userRef.current.focus();
  },[])


  useEffect( ()=> {
    const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    const match = PASSWORD_REGEX.test(password);
    match ? setValidPass(true) : setValidPass(false);
    if(!validPass){
        setError(true);
        setErrorMessage('Password must contain at least 7 characters,1 uppercase letter, 1 lowercase letter, 1 number and 1 special character');
    } else {
        setError(false);
        setErrorMessage('');
    }
  },[password])

  useEffect( ()=>{
      if(username.length > 0 && password.length > 0 && secretQuestion.length > 0 && secretAnswer.length > 0){
        setDisable(false);
      }
  },[username,password,secretQuestion,secretAnswer])

return(
<div id="login">
    <div className='loginchild'>
        <div>
            {
                error ? <div className={errorMessage == ""? 
                "alert": "alert-danger p-3 rounded mt-3"}>{errorMessage} </div> : null
            }
        </div>
     <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} 
                type="text" placeholder="Enter username"
               ref={userRef} onChange={(e) => handleUsername(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} 
                type="password" placeholder="Password" 
                onChange={(e) => handlePassword(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secretquestion">
                <Form.Label>Secret question</Form.Label>
                <Form.Control value={secretQuestion} 
                type="text" placeholder='enter Secret Question'
                onChange={(e) => handleSecretQuestion(e)}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secretAnswer">
                <Form.Label>Answer to Secret Question</Form.Label>
                <Form.Control value={secretAnswer} 
                type="password" placeholder='enter answer'
                onChange={(e) => handleSecretAnswer(e)}  />
            </Form.Group>
            <Button className='button' type="submit" disabled={disable}>
                Submit
            </Button>
    </Form>
</div>
</div>
)
}


export default Login;