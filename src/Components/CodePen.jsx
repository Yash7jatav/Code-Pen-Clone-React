import { useState, useEffect } from "react";
import Editor from "./Editor";
import React from "react";

function CodePen() {

    let [html, setHtml] = useState("");
    let [css, setCss] = useState("");
    let [javascript, setJavascript] = useState("");
    let [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(`  
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
            </html>
        `)
        }, 250);

        return () => clearTimeout(timeOut);

    }, [html, css, javascript]);

    return (
        <>

        <div className="pen topPen">

            <Editor language = "xml"
            displayName = "HTML"
            value = {html}
            onChange = {setHtml}
            />

            <Editor language = "css"
            displayName = "CSS"
            value = {css}
            onChange = {setCss}
            />

            <Editor language = "javascript"
            displayName = "JAVASCRIPT"
            value = {javascript}
            onChange = {setJavascript}
            />

        </div>

        <div className="bottomPen">
            <iframe
            title = "output"
            srcDoc={srcDoc}
            sandbox = "allow-scripts"
            frameBorder = "0"
            width = "100%"
            height = "100%"
            />
        </div>

        </>
    )
}

export default CodePen;