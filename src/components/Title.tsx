import { css } from "@emotion/react";
import { fontSize, spacing } from "@/styles/constant";

const root = css`
  width: 100%;
  margin-bottom: ${spacing.gap};
  text-align: left;
  font-family: "YouAndI", sans-serif;
  font-size: ${fontSize.lg};
  position: sticky;
  left: 0;
`;

export const Title = () => {
  return <h1 css={root}>스크롤링 라이브러리</h1>;
};
