// import createRoot
import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./src/components/app.jsx";
import Home from "./src/components/home/home.jsx"
import AboutMe from "./src/components/about-me/index.jsx"
import NavBar from "./src/components/navigation-bar/nav-bar.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />},
    {
      path: "/about-me",
      element: <AboutMe />
    }
])

// render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <NavBar key="NavBar"/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
