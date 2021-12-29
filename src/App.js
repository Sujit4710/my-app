import React, {useState} from 'react'
import './App.css';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextfForm from './Component/TextfForm';
import About from './Component/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#393b39'
      showAlert("Dark mode is enabled successfully!!!","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = '#fff'
      showAlert("Light mode is enabled successfully!!!","success")
    }
  }

  return (
   <>
   {/* <Router> */}
  <Navbar title="Saitama" Mode={mode} toggle={toggleMode}/>
  <Alert alert={alert}/>
  
  {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}/> */}
          <TextfForm Title="Enter Your Info..." Mode={mode}/>
          
  {/* </Routes>
  </Router> */}
  
  
</>
  );
}

export default App;
