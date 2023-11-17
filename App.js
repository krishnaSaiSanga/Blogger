import React from 'react';
import './App.css';
import Loginpage from './Components/loginpage';
import Login from './Components/login';
import MainPage from './Components/MainPage';
import Matter from './Components/Matter';
import MPosts from './Components/My Posts';
import Profile from './Components/Profile';
import PostsMy from './Components/PostsMy';
import Nullabout from './Components/Nullabout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path='/login' element={<Login />} />
        
        <Route path='/main' element={<MainPage />}/>
        <Route path='/matter' element={<Matter />} />
        <Route path='/myposts' element={<MPosts />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/postsmy' element={<PostsMy />} />
        <Route path='/nulabout' element={<Nullabout />} />
      </Routes>
     </Router>
     
     
    </div>
  );
}

export default App;
