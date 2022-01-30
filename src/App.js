import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfile from './components/Textfile';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [mode1, setmode1] = useState("Enable Darkmode")
  const [mode2, setmode2] = useState("dark")
  const [alert, setalert] = useState(null)
  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    },3000);
  }
  const togglemode = ()=>{
    if(mode==="light"){
     setmode("dark");
     setmode1("Enable Lightmode");
     setmode2("light");
     document.body.style.backgroundColor = '#042743'
     showalert("Dark mode has been enabled","success")
    }
    else{
      setmode("light");
      setmode1("Enable darkmode");
      setmode2("dark");
      document.body.style.backgroundColor = 'white'
      showalert("light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
       <Navbar text="AboutText" title="TextUtils" mode={mode} modex={mode1} modey={mode2} toggle={togglemode} />
       <Alerts alert={alert} />
       <div className="container my-3">
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textfile showalert={showalert} heading="Text utils - Word counter,character counter,remove extra spaces" mode={mode} />
          </Route>
          </Switch>
  </div>
  </Router>
    </>
  );
}

export default App;
