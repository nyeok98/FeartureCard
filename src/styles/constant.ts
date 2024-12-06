import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "YouAndI";
    src: url("./src/assets/fonts/fontYouandiModernTR.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const fontSize = {
  xl: "36px",
  lg: "24px",
  md: "18px",
  rg: "12px",
  xm: "10px",
};

export const size = {
  cardWidth: "200px",
  cardHeight: "320px",
  br: "30px",
};

export const spacing = {
  gap: "30px",
  sectionMargin: "120px",
};

export const shawdow = { default: " rgba(0, 0, 0, 0.1) 0px 4px 12px" };
