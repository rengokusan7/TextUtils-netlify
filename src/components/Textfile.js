import React,{useState} from 'react'

export default function Textfile(props) {
    const [text, setText] = useState("");
    const handleUpclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("converted to Upper case","success")
    }
    const handleLoclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("converted to lower case","success")
    }
    const handleclearclick = ()=>{
        let newtext = "";
        setText(newtext);
        props.showalert("cleared","success")
    }
    const handlespace = ()=>{
        let newtext = text.split(/\s+/);
        setText(newtext.join(" "));
        props.showalert("removed extra spaces","success")
    }
    const handleonclick = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color : props.mode==="dark"?"white":"black"}}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleonclick} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlespace}>Remove Extraspaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split().filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
