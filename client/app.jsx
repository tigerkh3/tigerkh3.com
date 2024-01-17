// import createRoot
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/index.jsx";

// render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)
