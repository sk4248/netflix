import React from "react";
import JumboData from "fixtures/jumbo.json";
import Jumbotron from "components/jumbotron";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {JumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.SubTitle}</Jumbotron.SubTitle>
          <img src={require("images/misc/home-bg.jpg")} alt={item.alt} />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
