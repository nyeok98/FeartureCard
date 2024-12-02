import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  @font-face {
    font-family: "YouAndI";
    src: url("./src/assets/fonts/fontYouandiModernTR.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>
);
