import { useState } from "react";
import projectLogo from "../../assets/logo_site.png";
import "./App.css";

import CssBaseline from '@mui/material/CssBaseline';

import ResponsiveAppBar from '../Header/Header';

import Title from "../Title/Title";

function App() {
  return (
    <>
      <CssBaseline>
        <ResponsiveAppBar/>
        <a
          href="https://github.com/KetrinZireael/pet-project-ciri"
          target="_blank"
        >
          {/* <img
            src={projectLogo}
            className="logo react"
            alt="Pet Project Ciri"
          /> */}
        </a>
              {/* <Title heading = "Pet Project Ciri"/> */}

      </CssBaseline>
    </>
  );
}

export default App;
