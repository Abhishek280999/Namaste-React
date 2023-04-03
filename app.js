import React from "react";
import ReactDOM from "react-dom/client";

//React elements
//React.createElement => Object => HTMLElement(render)
const elements = <span>React Element</span>
const Title = () =>(
    <h1 id="heading" className="root">
   
  Namaste React Using JSX
  
  </h1>
  );

//React components - 2 types 
 // Functional component  -- NEW way
 // Class based component  -- OLD way

 // Functional component  -- NEW way

//  const HeadingComponent = () => <h1>Namaste React Using Functional component</h1>


//OR
   // Component composition

   //REact Fragment - behavior like an emety
 const HeadingComponent = () =>(
   <React.Fragment>
  
    <div id="container">
    {Title()}
    <Title></Title>    
        <h1 id="heading">Namaste React Using Functional component</h1>
    </div>
    <div id="container">   
        <h1 id="heading">Namaste React Using Functional component</h1>
    </div>
 
    </React.Fragment>
 )   


 // <HeadingComponent/>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);  

