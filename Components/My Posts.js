import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PostsMy from './PostsMy'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const  MPosts = () => {
  const location=useLocation();
  /*const Article=[
    {'id':1,
      'link':"https://img.freepik.com/free-photo/ai-generated-labrador-retriever-dog-picture_23-2150644801.jpg",
     'desc':"All about Dogs",
     'matter':"Dogs, often referred to as mans best friend, have been loyal companions to humans for thousands of years. Their unique ability to forge deep emotional connections with their owners is unparalleled, creating bonds that transcend words. Whether providing unwavering support during challenging times or simply offering a comforting presence, dogs have an innate understanding of human emotions, making them cherished members of countless households worldwide.The diversity among dog breeds adds to their charm. From the pint-sized Pomeranian to the majestic German Shepherd, each breed comes with its own set of characteristics, quirks, and physical traits. This diversity ensures that there's a dog for every lifestyle and preference, whether it's a playful and energetic partner for an active family or a calm and gentle companion for those seeking solace.Beyond companionship, dogs showcase remarkable intelligence and versatility. Their ability to learn commands,perform tasks, and adapt to various roles, from service animals to therapy companions, highlights their cognitive abilities.",
    },
    {'id':2,
      'link':"https://yaharibento.files.wordpress.com/2019/11/the-garden-of-words-anime-31.gif",
      'desc' :"Forests",
      'matter':"Forests, Earth's lungs, are vital ecosystems teeming with life. These expansive green havens harbor a myriad of plant and animal species, maintaining biodiversity and ecological balance. Beyond their environmental significance, forests provide resources crucial for human survival, including timber, medicine, and clean air. Yet, rampant deforestation threatens their existence, endangering countless species and exacerbating climate change. It is imperative to recognize the intrinsic value of forests, preserving them as invaluable contributors to the health of our planet and the well-being of future generations."
    }]*/

    const [Article,setArticle]=useState([]);
    useEffect(()=>{
      const myp=async ()=>{
        await axios.get(`http://localhost:8080/getMyPosts?id=${location.state.id}`).then(r=>setArticle(r.data.posts)).catch(err=>console.log(err));
      };
      myp();
    },[]
    )

  return (
    <div>
    
       <Navbar id={location.state.id} />
        <div className='mainPage '>
        <div className="container text-center">
         <div className="row row-cols-lg-3">
          {Article.map((ele)=>(
            <div className="col" key={ele.id}>
              <PostsMy id={location.state.id} link={ele.link} pid={ele.id} head={ele.headding} desc={ele.desccription} />
              </div>
          ))}
          </div>
         </div>
          </div>
    </div>
  )
}

export default MPosts