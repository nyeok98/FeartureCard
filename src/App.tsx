import React, { ReactNode } from "react";
import { ScrollingCards } from "./components/ScrollingCards";
import { Title } from "./components/Title";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "414px",
          height: "896px",
          border: "1px solid #000",
          borderRadius: "var(--br)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Title />
      <ScrollingCards />
    </Layout>
  );
}

export default App;
