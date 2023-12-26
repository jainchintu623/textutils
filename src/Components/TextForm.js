import React, {useState}  from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
     setText(newText);
}

const handleLoClick =()=>{
  // console.log("uppercase was clicked" + text);
  let newText = text.toLocaleLowerCase();
   setText(newText);
}
const handleClearClick =()=>{
  // console.log("uppercase was clicked" + text);
  let newText = '';
   setText(newText);
}





    const handleOnChange =(event)=>{
        //    console.log("onchange");
           setText(event.target.value)
    }
    const [text, setText] = useState("");

  return (
    <>
    <div>
        <h1>{props.heading} </h1>
        
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="3"></textarea>
</div> 
<button className=' btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Uppercase</button>

<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>


    </div>
  

    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length }  Mintues Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     
    </div>
    </>
  )
}
