import './App.css';
import About from './components/About';
import Nav from './components/Nav';
//import Button from './components/Button';
import Testform from './components/Testform';
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light');

  const toggleMode=() =>{
    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor ='#17191a'; 
    }
    else {setMode('light');
    document.body.style.backgroundColor ='white';
   }}
   
   function blueMode()
   {
    if(mode==='light')
    {
      setMode('blue')
      document.body.style.backgroundColor ='blue';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
    }}
  
  return (
    <Router>
    

    <div>
      <Nav title ="textutlis" About="About us" mode={mode} toggleMode={toggleMode} blueMode={blueMode} />
      {/* <Nav></Nav> */}
    </div>
    {/* <div>
      <Button></Button>
    </div> */}
    <div className="container my-3" >
    <Routes>
          <Route path="/about" element={<About heading ="About section"/>}>
          
          </Route>
          
          <Route path="/" element={<Testform heading="Enter the text here" mode={mode}/>}>
          
          </Route>
        </Routes>
    
    </div>
    {/* <div className="container my-3">
      <About heading ="About section"/>
    </div> */}
    
    
    </Router>
    
  


  );
}

export default App;
