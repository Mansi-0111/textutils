import React, {useState} from 'react'



export default function Textform(props){
    const handleOnUpper = () =>{
        setText(text.toUpperCase());
    }

    const handleOnLower = () =>{
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
 
    const [text, setText] = useState("Enter text here...");
    return(
        <>
        <div className="container mt-3" style={{color:props.mode==='light'?'black' : 'white'}}>
            <h1>Enter your text</h1>
            <div className="mb-3" style={{backgroundColor:props.mode==='light'?'white' : 'black', color:props.mode==='light'?'black' : 'white' }}>   
                <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleOnUpper} >Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleOnLower} >Convert to Uppercase</button>
        </div>
        <div className="container mt-3" style={{color:props.mode==='light'?'black' : 'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <p>{text.split("\n").length-1} sentences</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}