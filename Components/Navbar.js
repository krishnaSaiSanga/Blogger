import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
 const navigate=useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-dark pos">
  <div className="container-fluid">
    <button className="navbar-brand text-light blogger" onClick={()=> navigate('/main',{state:{id:props.id}})}>Blogger</button>
    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active text-light" aria-current="page" onClick={()=> navigate('/main',{state:{id:props.id}})}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-light" onClick={()=> navigate('/myposts',{state:{id:props.id}})}>My Posts</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-light" onClick={()=> navigate('/nulabout',{state:{id:props.id}})}>Add Post</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-light" onClick={()=> navigate('/')}>Logout</button>
        </li>
        </ul>
        </div>
        </div>
         </nav>
  )
}

export default Navbar