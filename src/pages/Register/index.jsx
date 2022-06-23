import React from "react";
import DisplayTitleRegister from "../../components/DisplayTitleRegister";
import FormRegisterNew from "../../components/FormRegisterNew";
import { Box,Box2, PageRegister } from "./styles";

export default function Register() {
  return (
    <PageRegister>
      <Box>
        <DisplayTitleRegister />
      </Box>
      <Box2>
        <FormRegisterNew/>
      </Box2>
    </PageRegister>

  );
}
