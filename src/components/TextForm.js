import React, { useState } from 'react'

function TextForm(props) {

    let [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    

    const handleUpClick = () => {
        if (text === "") {
            alert("please type a text then convert uppercase")
        } else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success")
        }
    }


    const handleLoClick = () => {
        if (text === "") {
            alert("please type a text then convert lowercase")
        } else if (text === text.toLowerCase()) {
            alert("already convert to lowercase")
        } else {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success");
        }
    }


    const handleCapitalizeWord = () => {
        let arr = text.split(" ");
        console.log(arr);

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }

        const newText = arr.join(" ");
        setText(newText);
    }

    const handleClearClick = () => {
        setText("");
    }


    const handleUndoClick = () => {
        if (text === "") {
            alert("empty text")
        } else {
            let undo = text.split(" ");
            undo.pop();
            setText(undo.join(" "));
            props.showAlert("one step undo", "success")
        }
    }

    
    const handelCopyChange = () => {
        if(text === ""){
            alert("please type a text then copy")
        }else{
            document.getSelection().removeAllRanges();
            navigator.clipboard.writeText(text);
            props.showAlert("successfully copy the text", "success")
        }
    };

    const handelExtraSpces = () => {
        if(text === ""){
            alert("please type a text then delete space")
        }else {  
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("remove extra spacess", "success")
        }
    };

    return (
        <div>
            <div className="container mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" placeholder='Enter Text Here' rows="8"></textarea>
                <button className='btn btn-primary mt-2 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={handleCapitalizeWord}>Capitalize First Letter</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={handleClearClick}>Clear</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={handleUndoClick}>Undo</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={handelCopyChange}>Copy</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={handelExtraSpces}>Remove Space</button>
            </div>
            <div className='container'>
                <h2>Your text summary</h2>
                <p>
                    <span className="fw-bold">{text.split(" ").filter((element) => { return element.length !== 0 }).length}</span> words and <span className="fw-bold">{text.replace(/\s+/g, '').length} </span> character
                </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length !== 0 ? text : "Enter someting in the textbox above to preview it here"}</p>
            </div>
        </div>
    )
}

export default TextForm;
