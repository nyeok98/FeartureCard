import { Content } from "@/types/content";
import { cardStyles } from "@/styles/Card.styles";

type CardProps = {
  content: Content;
};

export const Card = ({ content }: CardProps) => {
  return (
    <div css={cardStyles.self}>
      <h3>{content.title}</h3>
    </div>
  );
};
