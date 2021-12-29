import React, {useState} from 'react'
import './form.css'

export default function TextfForm(props) {
    const [text, settext] = useState("Enter Text...");

    const OnClick = () => {
        let Uptext = text.toUpperCase();
        settext(Uptext);
    }

    const OnClickClear = ()=>{
        settext("");
    }

    const handleChange = (event) => {
        settext(event.target.value);
    }


    return (
        <>
        <div className="container my-3">
            <h1 className={`text-${props.Mode==='dark'?'light':'dark'}`}>{props.Title}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.Mode==='dark'?'#c1c0cc':'#fff'}} onChange={handleChange} id="Textarea" rows="6"></textarea>
            </div>
            <button className={`btn btn-${props.Mode==='dark'?'secondary':'info'}`} onClick={OnClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.Mode==='dark'?'secondary':'info'} space`} onClick={OnClickClear}>Clear</button>
        </div>
        </>
    )
}
