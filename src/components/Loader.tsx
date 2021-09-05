import React from "react";
import styled from "styled-components";

const Loader: React.FC = () => {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        ⏰
      </span>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;
