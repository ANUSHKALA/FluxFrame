import React from "react";
import { transform } from "babel-standalone";

export default function DynamicLoader({ code }) {
  // edit the code string by removing the string after "return"
  
  const transpiledCode = transform(code, {
    presets: ["react", "es2015"],
  }).code;

  const createComponent = new Function(
    "React",
    `
    ${transpiledCode}
    return Component;
  `
  );

  const DynamicComponent = createComponent(React);

  return <DynamicComponent />;
}
