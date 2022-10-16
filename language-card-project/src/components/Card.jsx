import React from "react";
import Language from "./Language";
import Container from "react-bootstrap/Container";

const Card = () => {
  return (
    <Container style={{ background: "grey" }}>
      <h1>Language</h1>
      <Language />
    </Container>
  );
};

export default Card;
