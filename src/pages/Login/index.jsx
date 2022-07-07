import React from "react";
import DisplayTitleLogin from "../../components/DisplayTitleLogin";
import LoginForm from "../../components/LoginForm";
import { Box, PageLogin } from "./styles";

export default function Login() {
  return (
    <PageLogin>
      <LoginForm />
      <Box>
        <DisplayTitleLogin/>
      </Box>
    </PageLogin>
  );
}
