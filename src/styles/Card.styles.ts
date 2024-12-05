import { css } from "@emotion/react";
import { size, spacing, shawdow } from "./constant";

export const cardStyles = {
  self: css({
    minWidth: size.cardWidth,
    minHeight: size.cardHeight,
    borderRadius: size.br,
    padding: spacing.gap,
    boxShadow: shawdow.default,
  }),
};
