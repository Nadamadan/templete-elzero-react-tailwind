import React from "react";
import ReactDom from "react-dom";
import App from './App';
import './index.css';
import Services from "./components/services";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
}from "react-router-dom";
const router=createBrowserRouter([
 {
    path:"/services",
    Component:<Services/>,
 },
]);

const root=ReactDom.render(<App/>,document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)