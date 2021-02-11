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
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFnID762OWUa5LAmwBOYJwqItuDPtJnjl5g&usqp=CAU"
