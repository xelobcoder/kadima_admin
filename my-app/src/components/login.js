import React ,{useState,useRef,useEffect} from 'react';
import "../css/login.css";


function Login() {
    const [username,setUsername ] = useState('');
    const [validUsername,setValidUsername] = useState(false);
    const [password,setPassword] = useState("");
    const [validPassword,setValidPassword] = useState(false);
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [success,setSuccess] = useState(false);
    const [answer,setAnswer] = useState('');
    const [question,setQuestion] = useState('');
    const [userFocus,setUserFocus] = useState(false);
    const [passFocus,setPassFocus] = useState(false);
    const [disable,setDisable] = useState(false);
    const usersRef = useRef(null);



    const PASSWORD_REGEX = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    const handleUserChange = function(e) {
        let value = e.target.value;
        setUsername(value);
    }

    const handlePasswordChange = function(e) {
        let value = e.target.value;
        setPassword(value);
    }

    const handleSubmit = function(e) {
        e.preventDefault();
    }
 
    useEffect(() => {
        if(password.length > 0) {
            setErrorMessage("Password must contain at least 6 characters, one uppercase, one lowercase, one number and one special character");
            const result = PASSWORD_REGEX.test(password);
            result ? setValidPassword(true) : setValidPassword(false);
            validPassword ? setError(false) : setError(true);
            setDisable(true) 
        } else {
            setValidPassword(false);
            setError(true);
            setErrorMessage("Password must contain at least 6 characters, one uppercase, one lowercase, one number and one special character");
        }
          
    },[password])


    useEffect( ()=> {
        validUsername ? setError(false) : setError(true);
       if(username.length > 6) {
           setValidUsername(true);
           setError(false);
           setErrorMessage("");
       } else {
           setErrorMessage("Username must contain at least 6 characters");
           setValidUsername(false);
           setError(true);
       }
    },[username])

  
    useEffect(() => {
        if(validUsername && validPassword) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    } ,[username,password])

   

return (
<div>
   
<div className='container-fluid' id="login">
<div className='container'>
    <div className='row'> 
    <form className='col-12' id='Login'>
        <div className='mt-5'>
        <div className='loginchild'>
            {
                error ? <div className="alert alert-danger">{
                    errorMessage
                } </div> :null
           
            }
        </div>
            <div className='card-body loginchild'>
            <label id="fullnamelabel" htmlFor="fullname">username</label>
            <input id="fullname" name="username" type="text"
              className="form-control" required 
              value={username} placeholder="eg.tiifu hamza kojo boronson"
               onChange={(e) => handleUserChange(e)}
               onFocus={(e) => setUserFocus(true)} 
               onBlur={(e) => setUserFocus(false)} 
             />
            <label id='passwordlabel'>password</label>
            <input id='password' name="password" 
                className={validPassword ? "form-control" : "form-control"}
                onFocus={(e) => setPassFocus(true)} 
                onBlur={(e) => setPassFocus(false)} 
                placeholder='xxxxxxxxx739383652' onChange={(e) => handlePasswordChange(e)} type="password" class="form-control" required value={password}/>
                <button type='submit' className='button'>submit</button>
            </div>
            </div>
    </form>
    </div>
        {/* <div className='row' id='secretQuestion'>
                <label>Type in Secret question? </label>
                <input type="text" className="form-control" value={question} required/>
                <label>
                Type in answer to secret Question
            </label>
            <input type="text" className='form-control'required value={answer} placeholder='type answer her' id='secrectAnswer' />
                <button type='button' className='btn button mt-3'>verify</button>
        </div> */}
    </div>
    </div>
</div>
)

}


export default Login;