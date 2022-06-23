import React from "react";
import DisplayTitleRegister from "../../components/DisplayTitleRegister";
import FormRegisterNew from "../../components/FormRegisterNew";
import { Box, PageRegister } from "./styles";

export default function Register() {
  return (
    <PageRegister>
      <Box>
        <DisplayTitleRegister />
      </Box>
      <Box>
        <FormRegisterNew/>
      </Box>
    </PageRegister>

  );
}
