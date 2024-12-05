import { ReactNode } from "react";
import { CardSlider } from "./components/CardSlider";
import { appStyles } from "./styles/App.styles";

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
    <MockupBox>
      <CardSlider />
    </MockupBox>
  );
}

export default App;
