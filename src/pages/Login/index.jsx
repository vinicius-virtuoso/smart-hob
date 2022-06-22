import React from "react";
import LoginForm from "../../components/LoginForm";
import { Box, PageLogin } from "./styles";

export default function Login() {
  return (
    <PageLogin>
      <LoginForm />
      <Box>{/* img */}</Box>
    </PageLogin>
  );
}
