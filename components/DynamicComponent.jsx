import React from 'react';
import * as parser from '@babel/parser';
import generator from '@babel/generator';

const DynamicComponent = ({ code }) => {
    console.log(code)
    // Parse the provided code string
    const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx'],
    });

    // Generate JavaScript code from the AST
    const generatedCode = generator(ast, {}).code;

    // Create and render the component using Function and eval
    const componentFunction = new Function('React', `${generatedCode}; return Component;`);
    const Component = componentFunction(React);

    return <Component />;
};

export default DynamicComponent;
