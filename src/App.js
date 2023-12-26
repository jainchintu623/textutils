
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';


// import TextForm from './Components/TextForm';
function App() {
  return (
    <>
   
<Navbar tittle= "TextUtils" AboutText= "About Us"/>
<div className="container p-3">
{/* <TextForm heading="Enter The text "/> */}
<About/>
</div>
</>
  );
}

export default App;
