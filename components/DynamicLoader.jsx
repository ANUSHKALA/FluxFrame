
import React from 'react';
import { transform } from 'babel-standalone';


export default function DynamicLoader({ code }) {
  
  const transpiledCode = transform(code, {
    presets: ['react', 'es2015']
  }).code;

  const createComponent = new Function('React', `
    ${transpiledCode}
    return Component;
  `);

  const DynamicComponent = createComponent(React);
  
  return <DynamicComponent />;

}


