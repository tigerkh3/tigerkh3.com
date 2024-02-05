// import createRoot
import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./src/components/app.jsx";
import Home from "./src/components/home/home.jsx"
import InProgress from "./src/components/in-progress/in-progress.jsx"
import AboutMe from "./src/components/about-me/about-me.jsx"
import NavBar from "./src/components/navigation-bar/nav-bar.jsx"
import ProjectDetails from "./src/components/projects-details/project-details.jsx"
import ProjectsDisplay from "./src/components/projects-display/projects-display.jsx"
import sampleCards from "./src/components/projects-display/pd-components/sample/pd-card-sample.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-me",
    element: <AboutMe />
  },
  {
    path: "projects",
    element: <ProjectsDisplay compType={"main"}/>
  },
  {
    path: "project-details/:id",
    element: <ProjectDetails/>,
  },
  {
    path: "/journal",
    element: <InProgress />
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
