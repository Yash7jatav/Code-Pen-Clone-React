import React, { useState } from "react";
import "codemirror/lib/codemirror.css";         //Base css
import "codemirror/theme/material.css";         //Theme css
import "codemirror/mode/xml/xml";               //Essentially the same as HTML
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor({displayName, language, value, onChange}) {

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    let [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

    return (

        <div className={`editorContainer ${open ? "" : "collapsed"}`}>

            <div className="editorTitle">
                {displayName}
                <button onClick={handleClick} className="expandBtn"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></button>
            </div>

            <ControlledEditor                       //Controlling the overall editor
                onBeforeChange={handleChange}       
                value={value}
                className="codeMwrapper"            //forStyling
                options={{
                    lineWrapping : true,
                    lint : true,
                    mode : language,
                    lineNumbers : true,
                    theme : "material"
                }}
            />

        </div>
    )
}

export default Editor;
