
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';

import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, {useState}  from 'react'


function App() {
const [mode, setMode]=useState('light');
const [grayMode, setGrayMode]=useState('light');

const [alert, setAlert]=useState(null);

const showAlert = (message,type)=>
{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
     setAlert(null)
  }, 1500);
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert ("Dark mode has been enbled", "success")
    document.title ='Textutils -Dark Mode Enable'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert ("Light mode has been enbled", "success")
    document.title ='Textutils -light Mode Enable'
  }
}
const toggleModeGray=()=>{
  if(grayMode==='light'){
    setGrayMode('gray');
    document.body.style.backgroundColor='red';
    showAlert ("Dark mode has been enbled", "success")
  }
  else{
    setGrayMode('light');
    document.body.style.backgroundColor='white';
    showAlert ("Light mode has been enbled", "success")
  }
}
  return (
    <>
   
<Navbar tittle= "TextUtils"  mode={mode} toggleMode={toggleMode}  grayMode={grayMode} toggleModeGray={toggleModeGray}/>
<Alert alert={alert}/>
<div className="container p-3">
<TextForm   showAlert={ showAlert}  heading="Enter The text "  mode={mode} grayMode={grayMode}/>
</div>
</>
  );
}

export default App;
