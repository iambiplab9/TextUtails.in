import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
   setText(newText)
   props.showAlert("Converted to uppercase", "success");
  }

  const handleloClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
   setText(newText)
   props.showAlert("Converted to lowercase", "success");
  }
  const handleClearClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = '';
   setText(newText)
   props.showAlert("Clear Text", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Text", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extraspace", "success");
  }
 
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>

<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743' }} id="mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>convert to upercase</button>
<button className='btn btn-primary mx-2 my-1' onClick={handleloClick}>convert to lowercase</button>
<button className='btn btn-primary mx- 2my-1' onClick={handleClearClick}>Clear text</button>

<button className='btn btn-primary mx-2 my-1' onClick={ handleExtraSpaces}>Remove Extra Space</button>

<button className='btn btn-primary mx-2 my-1' onClick={ handleCopy}>Copy Text</button>
    </div>
    <div className="container my3" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h2>your text summary</h2>
   <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
   <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}minutes read</p>
   <h2>preview</h2>
   <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
