import { Content } from "@/types/content";
import { cardStyles } from "@/styles/Card.styles";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";

type Props = {
  content: Content;
  parentRef: React.RefObject<HTMLDivElement>;
};

const Card: React.FC<Props> = ({ parentRef, content }) => {
  const { title, imgJSON } = content;
  const lottieRef = useRef<any>(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  const { ref, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    root: parentRef.current,
    rootMargin: "0px",
    triggerOnce: false,
  });

  useEffect(() => {
    if (entry) {
      const intersectionRatio = entry.intersectionRatio;
      const progress = 1 - intersectionRatio;
      setAnimationProgress(Math.min(Math.max(progress, 0), 1)); // 0과 1 사이로 제한
    }
  }, [entry]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(animationProgress * 100, true);
    }
  }, [animationProgress]);

  return (
    <div ref={ref} css={cardStyles.self}>
      <Lottie
        lottieRef={lottieRef}
        animationData={imgJSON}
        loop={false}
        autoplay={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <h2 css={cardStyles.title}>{title}</h2>
    </div>
  );
};

export default Card;
