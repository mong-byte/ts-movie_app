import React from "react";
import { Routes } from "./components";
import { GlobalStyles } from "./styles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
