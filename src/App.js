import './App.css';
// import About from './Components/about';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] =  useState(null);

const showAlert = (message, type)=>{
  setAlert({
    message: message,
    type: type
  })
setTimeout(() => {
  setAlert(null);
}, 1500)

}

const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
}

const togglemode = (cls)=>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabld", "success");
  }

  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabld", "success");
  }
}
  return (
 <>
  {/* <Navbar title="TextUtils" aboutText="About TextUtails"/>
  <Navbar/> */}
  {/* <Router> */}
  <Navbar title="TextUtails" mode={mode} togglemode={togglemode} />
   <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes>
          <Route Exact path="/about"
          
          element={<About mode={mode} />} >

           </Route>
          <Route Exact path="/"  */}
         element ={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}
            
          {/* </Route>
       
 </Routes> */}
  
         
 </div>
 {/* </Router> */}
  </>
  );
}

export default App;
