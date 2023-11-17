import React from 'react'
import { useNavigate } from 'react-router-dom'

const Posts = (props) => {
    const navigate=useNavigate();
    const goToMatter=()=>{
        navigate("/matter",{state:{id:props.id,link:props.link,head:props.head,desc:props.desc}});
    };
  return (
    <div>
        <div className='mainm  p-4'>
          <div className='card rounded mnbox' onClick={goToMatter} style={{width:"19rem",height:"350px"}}>
          <img  className='card-image-top rounded' style={{height:"60%",width:"100%"}} src={props.link} alt='' />
            <div className='card-body'>
              <p className='card-text text-light display-6'><strong>{props.head}</strong></p>
            </div>
            <div className='adjust'>
            <p className='text-light'>By {props.name}...</p>
            </div>
          </div>
          
          </div>
    </div>
  )
}

export default Posts