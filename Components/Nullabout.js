import React,{useState} from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Nullabout = () => {
  const navigate=useNavigate();
    const [Desc,setDesc]=useState('');
    const[Matter,setMatter]= useState('');
    const [File,setFile]=useState(null);
    const location=useLocation();
  
    const makeMatter=(e)=>{
      setMatter(e.target.value);
    }
    const makeDesc=(e)=>{
      setDesc(e.target.value);
    }
    const makeFile=(e)=>{
      
      setFile(e.target.files[0]);
      console.log(File);
      
      
    }

    const poster=async (formdata)=>{
      await axios.post("http://localhost:8080/setPost?",formdata,{
       headers:{
        'Content-Type':'multipart/form-data',
       },
      }).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    const postIt=(e)=>{
      e.preventDefault();
      const formdata=new FormData();
      formdata.append('id',location.state.id);
      formdata.append('file',File);
      formdata.append('head',Desc);
      formdata.append('desc',Matter);

      poster(formdata);
      navigate('/myposts',{state:{id:location.state.id}});

    }
   
  
  
      
    
    return (
      <div>
      
      <div className='mtr'>
      <Navbar id={location.state.id}/>
      <div className='display-4 text-secondary my-2'><strong>Add File</strong></div>
      <input className='text-light mt-2 rounded' onChange={makeFile} type='file' accept='image/png,image/jpeg,image/gif' placeholder='choose file' />
      {File && <div className='mt-3'><img style={{width:"50%",height:'50%'}} src={URL.createObjectURL(File) } alt='...' /></div>}
      <div className='display-4 text-secondary mt-4'><strong>About</strong></div>
      <textarea className='rounded pstcl text-dark' onChange={makeDesc} value={Desc} style={{width:"80%"}} placeholder='enter about'/>
      <div className='display-4 text-secondary mt-4'><strong>Description</strong></div>
      <textarea className='rounded pstcl text-dark' onChange={makeMatter} value={Matter} style={{width:"80%",height:"30%"}} placeholder='enter description'/>
      <div className='mt-3'><button className='rounded-pill buttn ' onClick={postIt} style={{width:"30%",height:"50px"}}><strong className='text-light'>Add Post</strong></button></div>
      
      </div>
      </div>
     
    )
  }

export default Nullabout