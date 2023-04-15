import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body2 from "./components/Body2";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";


const AppLayout = ()=>{
  return(
    <>
  <Header/>
  <Body/>
  {/* <Body2/>  */}
  </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);  

