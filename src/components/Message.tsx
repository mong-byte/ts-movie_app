import React from "react";
import styled from "styled-components";

interface MessagePropsTypes {
  text: string;
  color: string;
}

const Message: React.FC<MessagePropsTypes> = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

export default Message;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
`;
