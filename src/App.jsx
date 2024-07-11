import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// recipe page
import Recipe from "./Recipe";

function App() {
  return (
    <div className="bg-Creame flex flex-row justify-center items-center pt-5 pb-5 w-4/4 ">
      <Recipe></Recipe>
    </div>
  );
}

export default App;
