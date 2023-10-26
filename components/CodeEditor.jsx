import Editor from "@monaco-editor/react"
import {useState} from "react";
const CodeEditor = (onChange, code) => {
    // const [value, setValue] = useState(code || "")

    const handleEditorChange = (value) => {
        // setValue(value)
        // onChange("code", value)
        console.log(code)
    }
    return (
        <div className="bg-gray-500 h-screen">
            <div>
                <Editor
                    height="100vh"
                    width={`100%`}
                    language = {"html"}
                    // value = {value}
                    theme = "night-owl"
                    onChange={handleEditorChange}
                />
            </div>
        </div>
    )
}

export default CodeEditor;