import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Testform(props) {
  const handleUpClick =() =>{
    // console.log("uppercase was clicked"+ text);
    let newtext=text.toUpperCase();
    settext(newtext)
  }
  const reverse=() =>{
    let newtext=text.split("").reverse().join("");
    settext(newtext)


  }
  const handleLoClick=() =>{
    let newtext=text.toLowerCase();
    settext(newtext)
  }
  const handleclearClick=() =>{
    let newtext=("")
    settext(newtext)
  }
  const handleOnChange =(event) =>{
    // console.log("oncgange");
    settext(event.target.value);
  }
  const handleCopy = () =>{
    let text=document.getElementById("mytext")
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpace =() =>{
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "))
  }
  const [text, settext]= useState('');
  // settext("new text");
  return (
    <>
          <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder='enter text here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white',cursor:'pointer'}} id="mytext" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={reverse}>Reverse text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>remove extra space</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
          <h2>your text summary</h2>
          <p>  {text.split(" ").length} words {text.length} characters</p>
          <p>  {0.008*text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"enter the text to preview it"}</p>
        </div>
    </>
   
  )
}

Testform.prototype={heading: PropTypes.string.isRequired};
Testform.defaultProps={heading: "Entre the text here"};
