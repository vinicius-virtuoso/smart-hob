import { useState } from "react";
import { ButtonForm } from "../ButtonForm";
import { Container, TextDiv, ButtomDiv } from "./styles";

const CardGroups = ({name, type, description}) => {

  const [onGroup, setOnGroup] = useState(true)
  // myGroups.find(()=> {

  //   if(idGroup) {
  //     setOnGroup(true)
  //   }

  // })

  return (

    <Container>
      <TextDiv>
        <h3>{name}</h3>
        <span>{type}</span>
        <p>{description}</p>
      </TextDiv>
      <ButtomDiv>
        {onGroup? 
          <ButtonForm secondary >Seguindo</ButtonForm> 
        : 
          <ButtonForm primary >Seguir</ButtonForm> 
        }
      </ButtomDiv>
    </Container>
    
  );
};

export default CardGroups;
