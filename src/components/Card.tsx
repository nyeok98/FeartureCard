import { Content } from "@/types/content";
import { css } from "@emotion/react";
import { size, spacing, shawdow } from "@/styles/constant";

const card = css`
  min-width: ${size.cardWidth};
  min-height: ${size.cardHeight};
  box-shadow: ${shawdow.default};
  border-radius: ${size.br};
  padding: ${spacing.gap};
`;

type CardProps = {
  content: Content;
};

export const Card = ({ content }: CardProps) => {
  return (
    <div css={card}>
      <h3>{content.title}</h3>
    </div>
  );
};
