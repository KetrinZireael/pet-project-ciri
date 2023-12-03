import { useState } from "react";
import projectLogo from "../../assets/logo_site.png";
import "./App.css";

import Title from "../Title/Title";

function App() {
  return (
    <>
      <div>
        <a
          href="https://github.com/KetrinZireael/pet-project-ciri"
          target="_blank"
        >
          <img
            src={projectLogo}
            className="logo react"
            alt="Pet Project Ciri"
          />
        </a>
      </div>
      <Title heading = "Pet Project Ciri"/>
    </>
  );
}

export default App;
