import  axios from 'axios';
import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Loginpage = () => {
    const [Username,setUsername]=useState("");
    const [Pass,setPass]=useState("");
    const [Repass,setRepass]=useState("");
    const navigate=useNavigate();

    
    const updateUsername=(e)=>{
        setUsername(e.target.value);
    }
    const posUser=async () =>{
        if(Pass.length!==0){
        await axios.post("http://localhost:8080/setUser",null,{
            params:{
                uname:Username,
                pas:Pass,
            },
        }).then(response=>response.json()).catch(err=>console.log(err));}
        
    }

    const updatePass=(e)=>{
        setPass(e.target.value);
    }
    const updateRepass=(e)=>{
        setRepass(e.target.value);
    }
    const goToLogin=()=>{

        posUser();
        navigate('/login');
    
    }

  return (
    <div className="loginhouse">
    <div className='loginPic'>
    
        <div className='transpar position-absolute top-50 start-50 translate-middle rounded'>
       <div><input type="text" className='trans mt-3'onChange={updateUsername} value={Username} placeholder="Username" /></div>
       <div> <input type="password" className='trans my-3'onChange={updatePass} value={Pass} placeholder="Password" /></div>
        <div><input type="password" className='trans mb-3'onChange={updateRepass} value={Repass} placeholder="Re-Enter Password" /></div>
        {Repass.length!==0?Pass===Repass?   
        <div className='tick rounded'>
            <p className='my-2 text-light'> <i className="fa-solid fa-circle-check fa-beat mx-2" style={{color: "#19f51d"}}></i>Password matched!</p>
        </div>
        :
        <div className='cross rounded'>
            <p className='my-2 text-light'> <i className="fa-solid fa-circle-xmark fa-beat-fade mx-1" style={{color: "#ff0000"}}></i>Password didn't match!</p>
        </div>:""}
        <div className='lgbtnl mt-2'>
        <button type="button" className='lgbtn rounded-pill text-light' onClick={goToLogin}>Sign up/Sign in</button>
        </div>
        </div>
        

    </div>
    </div>
  )
}

export default Loginpage