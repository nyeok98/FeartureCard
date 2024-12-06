import { css } from "@emotion/react";
import { fontSize, size, spacing } from "./constant";

export const root = css({
  width: "100%",
  display: "flex",
  gap: spacing.gap,
  paddingLeft: spacing.gap,
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const title = css({
  width: "100%",
  marginBottom: spacing.gap,
  textAlign: "left",
  fontFamily: "YouAndI",
  fontSize: fontSize.lg,
  position: "sticky",
  left: 0,
  padding: `0 ${spacing.gap}`,
});

export const lastCard = css({
  minWidth: size.cardWidth,
  minHeight: size.cardHeight,
  marginRight: spacing.sectionMargin,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "YouAndI",
  fontSize: fontSize.lg,
});
