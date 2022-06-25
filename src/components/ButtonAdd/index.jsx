import React from "react";
import { Button } from "./style";

const ButtonAdd = ({ theme, size, onClick }) => {
  return (
    <Button size={size} theme={theme} onClick={onClick}>
      +
    </Button>
  );
};

export default ButtonAdd;
