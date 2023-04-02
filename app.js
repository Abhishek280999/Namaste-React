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

    //JSX - i not HTML in JS

const jsxheading = <h1>Namaste React Using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


