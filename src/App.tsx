// React
import { ReactNode } from "react";
// Components
import { Title } from "./components/Title";
import { ScrollingCards } from "./components/ScrollingCards";
// Styles
import { css } from "@emotion/react";
import { size, spacing } from "./styles/constant";

const root = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const layout = css`
  display: block;
  width: 414px;
  height: 896px;
  border: 1.5px solid #000;
  border-radius: ${size.br};
  overflow: hidden;
`;

const container = css`
  width: 100%;
  height: 100%;
  padding: 0 ${spacing.gap};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div css={root}>
      <div css={layout}>{children}</div>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <div css={container}>
        <Title />
        <ScrollingCards />
      </div>
    </Layout>
  );
}

export default App;
