import React from "react";
import { Button } from "./style";

const ButtonAdd = ({ theme, size, onClick, ...res }) => {
  return (
    <Button size={size} theme={theme} onClick={onClick} {...res}>
      +
    </Button>
  );
};

export default ButtonAdd;
