/*

    Nasted Structures 

   <div id='parent'>
        <div id =''child>
            <h1> I'm an h1 tag</h1>
            <h2> I'm an h2 tag</h2>   //siblings
        </div>
        <div id =''child2>
            <h1> I'm an h1 tag</h1>
            <h2> I'm an h2 tag</h2>
        </div>
    </div>

    ReactElement(Object) => HTML (Browser Understand)

 */

const parent = React.createElement(
  "div",
  { id: "parent" },
 [
    React.createElement("div",{ id: "child" },
    [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag")   
    ]),
    React.createElement("div",{ id: "child2 " },
    [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag")   
    ])
 ]
);

// const heading =  React.createElement(  // object

//     'h1',
//     {
//         id: 'heading'   // attribute
//     },
//     "Hello World from React!")  // This is children



//JSX

console.log(parent); // its return object

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
