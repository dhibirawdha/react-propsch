import React from 'react';
import './App.css';
import Profile from './Profile/Component/Profile.jsx';
// import handleName from './profile/handleName.js';


function App() {
  
  return (
    <>
    {/* <handleName fullName ='dhibi rawdha'/> */}
    <div className = 'App'>
      <Profile fullName = 'dhibi rawdha' bio = 'An ambitious, and hard-working girl.' profession =' JavaScript Full Stack Developer'>
        <img src ={'capture.webp'} alt='profile'></img>
        </Profile>
    </div>
    
    
    </>
  );
}

export default App;