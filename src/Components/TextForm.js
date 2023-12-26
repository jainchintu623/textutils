import React, {useState}  from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
     setText(newText);
}
    const handleOnChange =(event)=>{
        //    console.log("onchange");
           setText(event.target.value)
    }
    const [text, setText] = useState(" ");

  return (
    <div>
        <h1>{props.heading} </h1>
        
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="3"></textarea>
</div> 
<button className=' btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
