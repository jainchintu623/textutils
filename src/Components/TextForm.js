import React, {useState}  from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Convert to the Uppercase","success")
}

const handleLoClick =()=>{
  // console.log("uppercase was clicked" + text);
  let newText = text.toLocaleLowerCase();
   setText(newText);
   props.showAlert("Convert to the Lowercase", "success")
}
const handleClearClick =()=>{
  // console.log("uppercase was clicked" + text);
  let newText = '';
   setText(newText);
   props.showAlert("Text clear", "success")
}





    const handleOnChange =(event)=>{
        //    console.log("onchange");
           setText(event.target.value)
    }

    const handleCopyClick=()=>{
      let text =document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copy clipboard", "success")
    }

    const handleExtraSpaceClick =()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove Extra Space", "success")
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className='conatiner' style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'},
        {backgroundColor: props.grayMode==='gray'?'red':'white', color: props.grayMode==='gray'?'white':'black'}
  }>
        <h1>{props.heading} </h1>
        
<div className="mb-3" >
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style={
    {backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'},
    {backgroundColor: props.grayMode==='gray'?'red':'white', color: props.grayMode==='gray'?'white':'white'}
  }
  rows="3"></textarea>
</div> 
<button className=' btn btn-primary mx-1' onClick={handleUpClick}  style={
    {backgroundColor: props.grayMode==='gray'?'red':'blue', color: props.grayMode==='dark'?'white':'white'}}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}   style={
    {backgroundColor: props.grayMode==='gray'?'red':'blue', color: props.grayMode==='dark'?'white':'white'}}>Convert to Lowercase</button>

<button className='btn btn-primary mx-1' onClick={handleClearClick}   style={
    {backgroundColor: props.grayMode==='gray'?'red':'blue', color: props.grayMode==='dark'?'white':'white'}}>Clear</button>

<button className='btn btn-primary mx-1' onClick={handleCopyClick}   style={
    {backgroundColor: props.grayMode==='gray'?'red':'blue', color: props.grayMode==='dark'?'white':'white'}}>copy</button>

<button className='btn btn-primary mx-1' onClick={handleExtraSpaceClick}   style={
    {backgroundColor: props.grayMode==='gray'?'red':'blue', color: props.grayMode==='dark'?'white':'white'}}>Remove Extra Space</button>

    </div>
  

    <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'},
        {backgroundColor: props.grayMode==='gray'?'red':'white', color: props.grayMode==='gray'?'white':'black'}
  }>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length }  Mintues Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter something in the textbox above to preview it here" }</p>
     
    </div>
    </>
  )
}
