import { ReactNode } from "react";
// Components
import { CardSlider } from "./components/CardSlider";
// Styles
import { Global } from "@emotion/react";
import { appStyles } from "./styles/App.styles";
import { globalStyles } from "./styles/constant";

const MockupBox = ({ children }: { children: ReactNode }) => {
  return (
    <div css={appStyles.root}>
      <div css={appStyles.layout}>
        <div css={appStyles.container}>{children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <MockupBox>
        <CardSlider />
      </MockupBox>
    </>
  );
}

export default App;
