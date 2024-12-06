import { css } from "@emotion/react";
import { size, spacing, shawdow, fontSize } from "./constant";

export const cardStyles = {
  self: css({
    backgroundColor: "#2a2a2a",
    minWidth: size.cardWidth,
    minHeight: size.cardHeight,
    borderRadius: size.br,
    boxShadow: shawdow.default,
    position: "relative",
    overflow: "hidden",
  }),

  title: css({
    position: "absolute",
    color: "white",
    fontFamily: "YouAndI",
    fontSize: fontSize.md,
    top: spacing.gap,
    left: spacing.gap,
  }),
};
