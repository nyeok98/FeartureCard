import { Card } from "./Card";
import { contentList } from "@/utils/examples";
import { root, title, lastCard } from "@/styles/CardSlider.styles";

export const CardSlider = () => {
  return (
    <>
      <h1 css={title}>스크롤링 라이브러리</h1>
      <div css={root}>
        {contentList.map((content, index) => (
          <Card key={`card-${index}`} content={content} />
        ))}
        <div css={lastCard}>Next</div>
      </div>
    </>
  );
};
