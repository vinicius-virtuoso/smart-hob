import React from "react";
import FormNewGroup from "./components/FormNewGroup";
// import InputForm from "./components/InputForm";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";

import Rotas from "./routes";
function App() {
  // exemplo de como utilizar inputs:
  // tema primário
  // <InputForm name="Senha" password primary errors={errors} {...register("password")}/>
  // tema secundário
  // <InputForm name="Username" text secondary errors={errors} {...register("username")} />
  // <InputForm name="Senha" password secondary errors={errors} {...register("password")}/>

  return (
    <>
      <Rotas />
      <FormNewGroup />
    </>
  );
}

export default App;
