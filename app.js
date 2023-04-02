import React from "react";
import ReactDOM from "react-dom/client";

//React elements
//React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
    "h1",
    { id: 'heading'},
    "Namaste React"
    );
    console.log(heading);

    //JSX - HTML - like  OR XML - like syntax

    // JSX - => React.createElement => React.createElement - Object  =>  HTMLElement(render)

const jsxheading =( <h1 id="heading" className="root">
Namaste React Using JSX
</h1>)
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);


