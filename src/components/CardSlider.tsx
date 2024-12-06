import Card from "./Card";
import { contentList } from "@/utils/examples";
import { root, title, lastCard } from "@/styles/CardSlider.styles";
import { useRef } from "react";

export const CardSlider = () => {
  const ref = useRef(null);
  return (
    <>
      <h1 css={title}>스크롤링 라이브러리</h1>
      <div ref={ref} css={root}>
        {contentList.map((content, index) => (
          <Card key={`card-${index}`} parentRef={ref} content={content} />
        ))}
        <div css={lastCard}>Next</div>
      </div>
    </>
  );
};
