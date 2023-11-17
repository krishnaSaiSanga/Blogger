import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
const [User,setUser]=useState('');
const [Pas,setPas]=useState('');
const [Id,setId]=useState('');
const [Msg,setMsg]=useState('');

useEffect(()=>{
  const ch=async ()=>{ await axios.get(`http://localhost:8080/checkUser?uname=${User}&pas=${Pas}`).then(res=>setId(res.data)).catch();
}; 
ch();
},[Pas]);

  const navigate=useNavigate();
  
  const goToMain=()=>{
 
    console.log(Id);
    if(Id.length!==0 && Id!=="invalid"){
      navigate('/main',{state:{id:Id}});
    }
    else{
      setMsg("invalid Username/Password");
    }
  
  }
const changedUser=(e)=>{
  setUser(e.target.value);
}

const changedPass=(e)=>{
  setPas(e.target.value);
}

  return (
    <div className='loginPic'>
      
        
       <div className='transpar position-absolute top-50 start-50 translate-middle'>
       <div>
       <p className='display-1 pleaseLogin'>Please Login!</p>
       </div>
       <div><input type="text" onChange={changedUser} value={User} className='trans mt-3' placeholder="Username" /></div>
       <div> <input type="password" onChange={changedPass} value={Pas} className='trans my-3' placeholder="Password" /></div>
       {Msg.length!==0?
        <div className='cross rounded'>
            <p className='my-2 text-light'> <i className="fa-solid fa-circle-xmark fa-beat-fade mx-1" style={{color: "#ff0000"}}></i>{Msg}</p>
        </div>:''}
       <div className='lgbtnl mt-2'>
        <button type="button" className='lgbtn rounded-pill text-light' onClick={goToMain}>Sign in</button>
        </div>
       </div>
    </div>
  )
}

export default Login