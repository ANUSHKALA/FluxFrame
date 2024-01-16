import React, { useEffect } from "react";
import DynamicLoader from "./DynamicLoader";

const RenderScreen = ({code}) => {
    const [inspectMode, setInspectMode] = React.useState(false);

    let selectedComponent = null;
    const setSelectedComponent = (value) => {
      selectedComponent = value;
    }

    const changeInspect = () => {
      if (inspectMode) {
        saveCode("");
      }
      setInspectMode(!inspectMode);
    };

    const saveCode = (code) => {
      if(inspectMode){
        localStorage.setItem("code", code);
      }
    }
  
    const handleInspect = (e) => {
      if (inspectMode) {
        e.stopPropagation();
        e.preventDefault();
        const element = e.target;

        if (selectedComponent && selectedComponent !== element) {
          clearSelectedComponent();
        }
        if (element.style.border) {
          clearSelectedComponent();
        } else {
          const code = element.outerHTML;
          saveCode(code);
          element.style.border = "2px solid blue";
          element.style.position = "relative";
          element.style.zIndex = "10";
          element.style.background = "rgba(10,10,90,0.5)";
          element.style.boxShadow = "0 0 10px black";
          element.style.cursor = "pointer";
          console.log(code)
          setSelectedComponent(element);
        }
      }

    };
  
    const clearSelectedComponent = () => {
      if (selectedComponent) {
        selectedComponent.style.border = null;
        selectedComponent.style.position = null;
        selectedComponent.style.zIndex = null;
        selectedComponent.style.background = null;
        selectedComponent.style.boxShadow = null;
        selectedComponent.style.cursor = null;
      }
      setSelectedComponent(null);
      saveCode("");
    };
  
    
    return (
      <div className="bg-white w-full h-full flex flex-col">
          <div className="z-10 mx-2 my-2 w-fit">
              <button
                  className={"p-3 cursor-pointer hover:bg-slate-700 text-white" +
                  (inspectMode
                      ?" bg-slate-800 border-2 border-blue-500 rounded text-white"
                      : " bg-slate-500 border-2 border-transparent rounded text-gray-100"
                  )}
                  onClick={changeInspect}
              >
                  Inspect Code
              </button>
          </div>
          <div className="container mx-auto flex items-center h-full cursor-pointer overflow-scroll z-0" onClick={handleInspect}>
              <DynamicLoader code={code} className="mx-auto" handleInspect={handleInspect}/>
          </div>
      </div>
    );
}


export default RenderScreen;