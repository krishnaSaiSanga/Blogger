import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const MainPage = () => {
  const location=useLocation();
  const [Data,setData]=useState([]);
  const [Name,setName]=useState('');
 {/*} const Article=[
    {'id':1,
      'link':"https://img.freepik.com/free-photo/ai-generated-labrador-retriever-dog-picture_23-2150644801.jpg",
     'desc':"All about Dogs",
     'matter':"Dogs, often referred to as mans best friend, have been loyal companions to humans for thousands of years. Their unique ability to forge deep emotional connections with their owners is unparalleled, creating bonds that transcend words. Whether providing unwavering support during challenging times or simply offering a comforting presence, dogs have an innate understanding of human emotions, making them cherished members of countless households worldwide.The diversity among dog breeds adds to their charm. From the pint-sized Pomeranian to the majestic German Shepherd, each breed comes with its own set of characteristics, quirks, and physical traits. This diversity ensures that there's a dog for every lifestyle and preference, whether it's a playful and energetic partner for an active family or a calm and gentle companion for those seeking solace.Beyond companionship, dogs showcase remarkable intelligence and versatility. Their ability to learn commands,perform tasks, and adapt to various roles, from service animals to therapy companions, highlights their cognitive abilities.",
    },
    {'id':2,
      'link':"https://yaharibento.files.wordpress.com/2019/11/the-garden-of-words-anime-31.gif",
      'desc' :"Forests",
      'matter':"Forests, Earth's lungs, are vital ecosystems teeming with life. These expansive green havens harbor a myriad of plant and animal species, maintaining biodiversity and ecological balance. Beyond their environmental significance, forests provide resources crucial for human survival, including timber, medicine, and clean air. Yet, rampant deforestation threatens their existence, endangering countless species and exacerbating climate change. It is imperative to recognize the intrinsic value of forests, preserving them as invaluable contributors to the health of our planet and the well-being of future generations."
    },
    {'id':3,
      'link':"https://cdn.theatlantic.com/thumbor/aVJhiKvpFedpXkVIAkE-DtABH3c=/2x16:977x528/960x504/media/img/mt/2020/10/246888_min-1/original.gif",
      'desc':"This is about Universe",
      'matter':"The universe, an infinite expanse of space and time, captivates human imagination with its vastness and mysteries. Billions of galaxies, each containing billions of stars, planets, and celestial wonders, form this cosmic tapestry. From the microscopic dance of particles to the colossal swirl of galaxies, the universe operates under intricate laws of physics. Its sheer enormity humbles our existence, emphasizing the small yet significant role Earth plays in this cosmic drama. As we explore the cosmos, the universe remains an awe-inspiring testament to the wonders of existence, inviting humanity to ponder its origins, purpose, and the endless possibilities that lie beyond."
    },
    {'id':4,
      'link':"https://wallpaperteg.com/wp-content/uploads/2021/07/Train-Wallpapers.jpg",
      'desc':"Train's evolution",
      'matter':"The evolution of trains has been a transformative journey, revolutionizing transportation over centuries. From the steam locomotives of the 19th century propelling the Industrial Revolution to the sleek, high-speed trains of today, technological advancements have propelled this mode of transport forward. Electrification, streamlined designs, and magnetic levitation technologies mark milestones in efficiency and speed. Trains connect distant cities, fostering economic growth and cultural exchange. As sustainability gains importance, innovations like hydrogen-powered trains promise eco-friendly alternatives. The evolution of trains showcases human ingenuity, adapting to societal needs and environmental concerns while continuing to play a crucial role in shaping modern connectivity."
    },
    {'id':5,
      'link':"https://images.tv9telugu.com/wp-content/uploads/2023/08/chandrayaan-3-landed-on-moon.jpg",
      'desc':"Chandrayan",
      'matter':"Chandrayaan, India's lunar exploration program, reflects the nation's space ambitions. Launched by the Indian Space Research Organisation (ISRO), Chandrayaan aims to explore the Moon's mysteries. The first mission, Chandrayaan-1, in 2008, discovered water molecules on the lunar surface, reshaping our understanding of Earth's celestial companion. Chandrayaan-2, launched in 2019, included an orbiter, lander, and rover, emphasizing technological advancements. Although the lander faced challenges, the orbiter continues to provide valuable lunar data. These missions symbolize India's prowess in space exploration, fostering scientific discovery and paving the way for future interplanetary endeavors. Chandrayaan embodies India's commitment to pushing the boundaries of space exploration."
    },
    {'id':6,
      'link':"https://i.gifer.com/OzG.gif",
      'desc':"A big ball of fire-SUN",
      'matter':"The Sun, a dazzling cosmic sphere at the heart of our solar system, is a colossal ball of hot, ionized gases, primarily hydrogen and helium. Its radiant energy fuels life on Earth, providing light and warmth. The Sun's intense gravitational pull governs the orbits of planets, keeping our celestial neighborhood in a delicate cosmic dance. Its surface, a seething cauldron of solar flares and magnetic storms, shapes space weather. Despite its life-giving qualities, the Sun's colossal energy production is a result of nuclear fusion, where hydrogen atoms fuse into helium, releasing an unfathomable amount of energy. The Sun stands as a cosmic powerhouse, shaping the dynamics of our solar system."
    },
    {
      'id':7,
      'link':"https://media2.giphy.com/media/oUuTdH8aEUE5fWKUcM/giphy.gif",
      'desc':'Bikes',
      'matter':"Bikes, simple yet transformative, epitomize efficient and eco-friendly transportation. From sleek road bicycles to rugged mountain bikes, their diverse designs cater to varied preferences and terrains. Biking promotes physical well-being, offering a sustainable alternative to fossil fuel-dependent transportation. Beyond health benefits, bikes foster community engagement, providing a sense of freedom and exploration. Commuters embrace the agility of city bikes, navigating urban landscapes with ease. With innovations like electric bikes and advanced materials, biking evolves, aligning with modern lifestyles and environmental consciousness. In their simplicity, bikes symbolize a timeless mode of transport, promoting health, sustainability, and a connection with the world around us."
    }
   
    ]; */}

    useEffect(()=>{
      const getPosts=async()=>{
        await axios.get(`http://localhost:8080/getAllPosts`).then(res=>setData(res.data)).catch(err=>console.log(err));
      };
      getPosts();
    },[]);

  return (
    <div>
         
        <Navbar id={location.state.id} />
        <div className='mainPage '>
        <div className="container text-center">
         <div className="row row-cols-lg-3">
          {
           Data.map((e)=>(
           e.posts.map(ele => (ele.length!==0?
            <div className=''>
              
            <div className="col" key={ele.id}>
              <Posts id={location.state.id} link={ele.link} name={e.name} head={ele.headding} desc={ele.desccription} />
              </div>
              
              </div>
              
              :''

          ))
            
           ))}
          </div>
         </div>
          </div> 
       

    </div>
  )
}

export default MainPage