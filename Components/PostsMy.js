import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const PostsMy = (props) => {
  const location=useLocation();

    const navigate=useNavigate();
    const goTodesc=()=>{
        navigate("/matter",{state:{link:props.link,head:props.head,desc:props.desc}});
    };
    const goToAbout=()=>{
        navigate('/profile',{state:{pid:props.pid,head:props.head,desc:props.desc}})
    }
    const deletePic= async()=>{
        await axios.delete(`http://localhost:8080/delete?pid=${props.pid}`).catch(err=>console.log(err));
        
    }
   


  return (
    <div className='boom'>
        
        <div className='mainm  p-4'>
          <div className='card rounded mnbox' style={{width:"19rem",height:"350px"}}>
            
          <img  className='card-image-top rounded' onClick={goTodesc} style={{height:"60%",width:"100%"}} src={props.link} alt='' />
            <div className='card-body' onClick={goTodesc}>
              <p className='card-text text-light display-6'><strong>{props.head}</strong></p>
            </div>
            <div className='edit mb-1 mx-1' >
            <button style={{width:"70px"}} onClick={goToAbout} className='mx-2 rounded-pill pbtn'><strong className='text-white'>Edit</strong></button>
            <button style={{width:"70px"}} onClick={deletePic} className='rounded-pill pbtn'><strong className='text-white'>Delete</strong></button>
        </div>
          </div>
  </div>

          </div>
  )
}

export default PostsMy