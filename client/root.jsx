// import createRoot
import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./src/components/app.jsx";
import Home from "./src/components/home/home.jsx"
import AboutMe from "./src/components/about-me/about-me.jsx"
import NavBar from "./src/components/navigation-bar/nav-bar.jsx"
import ProjectsDisplay from "./src/components/projects-display/projects-display.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />},
    {
      path: "/about-me",
      element: <AboutMe />
    },
    {
      path: "/projects",
      element: <ProjectsDisplay/>
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
