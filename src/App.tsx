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
          display: "block",
          width: "414px",
          height: "896px",
          border: "1px solid #000",
          borderRadius: "var(--br)",
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
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "0 var(--gap)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflowY: "scroll",
          boxSizing: "border-box",
        }}
      >
        <Title />
        <ScrollingCards />
      </div>
    </Layout>
  );
}

export default App;
