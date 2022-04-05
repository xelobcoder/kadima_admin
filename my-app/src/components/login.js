import React , {Component} from 'react';
import Headers from "../components/header";
import "../css/login.css";
class Login extends Component{
    render() {
        return (
            <div>
                <Headers/>
                <div className='container-fluid'>
                <div className='container'>
                    <div className='row'> 
                        <form className='col-12' id='Login'>
                           <div className='card mt-5'>
                               <div className='card-header'>
                                 <h4>Fill in to sign in</h4>
                               </div>
                               <div className='card-body loginchild'>
                                <label id="fullnamelabel" for="fullname">username</label>
                                <input id="fullname" name="fullname" type="text" class="form-control" />
                                <label id='passwordlabel'>password</label>
                                <input id='password' name="password" type="password" class="form-control"/>
                                <button type='submit' className='btn btn-primary mt-2'>submit</button>
                            </div>
                           </div>
                        </form>
                    </div>
                    <div className='row' id='secretQuestion'>
                         <label>Type in Secret question? </label>
                         <input type="text" className="form-control"/>
                         <label>
                            Type in answer to secret Question
                        </label>
                        <input type="text" className='form-control' placeholder='type answer her' id='secrectAnswer' />
                         <button type='button' className='btn btn-primary mt-3'>verify</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Login;