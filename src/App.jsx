// import InputForm from "./components/InputForm";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";

import Rotas from "./routes";
import SelectForm from "./components/SelectForm";

function App() {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome completo obrigatório")
      .min(6, "Mínimo 6 caracteres."),
    email: yup
      .string()
      .email("E-mail invalido")
      .required("E-mail obrigatório")
      .min(10),
    password: yup
      .string()
      .required("")
      .matches("^(?=.*[A-Z])", "Necessária 1 letra maiúscula.")
      .matches("^(?=.*[a-z])", "Necessária 1 letra minúscula.")
      .matches("^(?=.*[0-9])", "Necessária ter 1 numero")
      .matches("^(?=.*[!#@$%&])", "Necessária 1 caractere especial")
      .min(8, "Necessária no mínimo 8 caracteres."),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha necessária")
      .oneOf([yup.ref("password")], "As senhas devem corresponder"),
    category: yup.string().required("categoria obrigatória"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Rotas />
      <SelectForm
        label="Teste"
        {...register("category")}
        datasArray={["meditação", "pintura", "teatro", "esporte"]}
      />
    </>
  );
}

export default App;
