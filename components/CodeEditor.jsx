import Editor from "@monaco-editor/react"
import {useState} from "react";
import dummyCode from "./Component";

const CodeEditor = ({onChange, code}) => {


    const handleEditorChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="bg-gray-500 h-screen">
            <div>
                <Editor
                    height="100vh"
                    width={`100%`}
                    language = {"javascript"}
                    value = {code}
                    theme = "night-owl"
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default CodeEditor;