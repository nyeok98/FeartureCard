import { css } from "@emotion/react";
import { size, spacing } from "./constant";

export const appStyles = {
  root: css({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  layout: css({
    display: "block",
    width: "414px",
    height: "896px",
    border: "1.5px solid #000",
    borderRadius: size.br,
    overflow: "hidden",
  }),

  container: css({
    width: "100%",
    height: "100%",
    padding: `0 ${spacing.gap}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflowX: "auto",
    whiteSpace: "nowrap",
  }),
};
