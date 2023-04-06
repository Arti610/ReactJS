
import React, {useState} from 'react'

export default function ChangeCase(props) {
    const handleUpClick=()=>{
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick=()=>{
        let newText = Text.toLowerCase();
        setText(newText)
    }
    
   const handleChangeOn = (event)=>{
    setText(event.target.value)
   }
    const [Text, setText] = useState("");
  return (
    <>
    <div className="container content MY-5">
  <h1>{props.heading}</h1>
  <p>Here you can change the case of your code or text, just copy and paste or write your code here and click on the button for changing the case of fonts or text</p>
<div class="mb-3 my-3">
    <textarea class="form-control my-3" value={Text} id="exampleFormControlTextarea1" rows="8" placeholder='Enter Your Text' onChange={handleChangeOn}></textarea>
    <button type="button" class="btn btn-primary mx-3" onClick={handleUpClick}>UPPER CASE</button>
    <button type="button " class="btn btn-primary " onClick={handleLowerClick}>lower case</button>

</div>

</div>

</>
  )
}
