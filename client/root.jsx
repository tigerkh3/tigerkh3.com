// import createRoot
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./src/components/app.jsx";
import Home from "./src/components/home/home.jsx"
import Footer from "./src/components/footer-bar/footer.jsx"
import AboutMe from "./src/components/about-me/about-me.jsx"
import NavBar from "./src/components/navigation-bar/nav-bar.jsx"
import InProgress from "./src/components/in-progress/in-progress.jsx"
import Journal from "./src/components/journal/journal.jsx"
import JournalEditor from "./src/components/journal/editor/journal-editor.jsx";
import ProjectDetails from "./src/components/projects-details/project-details.jsx"
import ProjectsDisplay from "./src/components/projects-display/projects-display.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
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
    element: <Journal />,
    errorElement: <InProgress />,
  },
  {
    path: "/journal-editor",
    element: <JournalEditor/>

  }
])

// render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <NavBar key="NavBar"/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
)
