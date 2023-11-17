import React from 'react'
import { useLocation} from 'react-router-dom'
import Navbar from './Navbar';
const Matter = (props) => {
    const location=useLocation();
    
  return (
    <div className='mtrh'>
        <Navbar id={location.state.id}/>
    <div className='pst'>
        <div >
            <img className='mnbox mt-4' style={{width:"60%",height:"50%"}} src={location.state.link} alt="" />
        </div>
        <div className='mt-4'>
            <strong className='display-1 text-secondary '>
                {location.state.head}
            </strong>
        </div>
        <p className='text-light h3 mx-2 mtr'>
            {location.state.desc}
        </p>
    </div>
    </div>
  )
}

export default Matter