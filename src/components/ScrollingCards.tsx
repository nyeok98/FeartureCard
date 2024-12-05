import { Card } from "./Card";
import { Content } from "@/types/content";
import { css } from "@emotion/react";
import { fontSize, size, spacing } from "@/styles/constant";

import netflix from "~images/netflix.json";
import amazonPrime from "~images/amazonprime.json";
import disney from "~images/disney.json";
import androidTV from "~images/androidtv.json";
import fox from "~images/fox.json";

const root = css`
  width: 100%;
  display: flex;
  gap: ${spacing.gap};
  overflow-x: auto;
  padding: ${spacing.gap};

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

const lastSpace = css`
  min-width: ${size.cardWidth};
  min-height: ${size.cardHeight};
  margin-right: ${spacing.sectionMargin};
  font-family: "YouAndI", sans-serif;
  font-size: ${fontSize.lg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollingCards = () => {
  const contentList: Content[] = [
    { title: "Netflix", imgJSON: netflix },
    { title: "Amazon Prime", imgJSON: amazonPrime },
    { title: "Disney", imgJSON: disney },
    { title: "Android TV", imgJSON: androidTV },
    { title: "Fox", imgJSON: fox },
  ];
  return (
    <div css={root}>
      {contentList.map((content, index) => (
        <Card key={`card-${index}`} content={content} />
      ))}
      <div css={lastSpace}>Next</div>
    </div>
  );
};
