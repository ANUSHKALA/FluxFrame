import React from "react";
import Component from './Component'

const RenderScreen = () => {
    const [inspectMode, setInspectMode] = React.useState(false);
    const [selectedComponent, setSelectedComponent] = React.useState(null);
  
  
    const changeInspect = () => {
      setInspectMode(!inspectMode);
    };
  
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
          element.style.border = "2px solid blue";
          element.style.position = "relative";
          element.style.zIndex = "10";
          element.style.background = "rgba(10,10,90,0.5)";
          element.style.boxShadow = "0 0 10px black";
          element.style.cursor = "pointer";
          setSelectedComponent(element);
          console.log(code)
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
    };
  
    
    return (
      <div className="bg-gray-900 w-full h-full flex justify-center items-center">
        <div
          className={
            "p-3 cursor-pointer hover:bg-slate-800 text-white fixed top-10 left-10" +
            (inspectMode ? " bg-slate-800 border-2 border-blue-500" : " bg-slate-500")
          }
          onClick={changeInspect}
        >
          Inspect code
        </div>
        <div
          onClick={handleInspect}
          
          className="cursor-pointer"
        >
          <Component />
        </div>
      </div>
    );
}

export default RenderScreen;