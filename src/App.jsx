import React from "react";
import Rotas from "./routes";

function App() {
  // exemplo de como utilizar inputs:
  // tema primário
  // <InputForm name="Username" text primary errors={errors} {...register("username")} />
  // <InputForm name="Senha" password primary errors={errors} {...register("password")}/>
  // tema secundário
  // <InputForm name="Username" text secondary errors={errors} {...register("username")} />
  // <InputForm name="Senha" password secondary errors={errors} {...register("password")}/>

  return (
    <>
      <Rotas />
    </>
  );
}

export default App;
