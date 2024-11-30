import { Card } from "./Card";
import styles from "../styles/ScrollingCards.module.css";

type Content = {
  title?: string;
  imgUrl?: string;
};

export const ScrollingCards = () => {
  const contentList: Content[] = [{}, {}, {}, {}];
  return (
    <div className={styles.root}>
      {contentList.map((content) => (
        <Card />
      ))}
    </div>
  );
};
