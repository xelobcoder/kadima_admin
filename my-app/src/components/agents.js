import React, {useState,useEffect} from 'react';

function Agents(props) {
  const {url,name} = props;
  const [visible,setvisible] = useState(false);

  
  const buttonClick = function(ev){
     visible ? setvisible(false) : setvisible(true);
  }

  return (
    <div id='agent-cont'>
      <h5>Agent</h5>
       <div id='agent-picture'>
          <img src={url}/>
          <div>{name}</div>
       </div>
       <button className='btn btn-warning p-2 mt-2' onClick={(e) => buttonClick(e)}>
          send message
       </button>
       {
         visible ? (
          <form className='mt-3'>
              <input className='form-control mt-2' placeholder='Title'/>
              <input className='form-control mt-2' placeholder='Link'/>
              <textarea className='form-control mt-2' rows="6" placeholder='message'/>
              <div className='d-grid gap-2'>
                <button type='button' className='btn btn-block btn-warning mt-2' row="4" >
                  send
                </button>
              </div>
         </form>
         ): null
       }
    </div>
  )
}


export default Agents;