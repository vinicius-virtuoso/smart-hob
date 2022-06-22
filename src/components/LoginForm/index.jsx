import { FormContainer } from "../LoginForm/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "../../components/InputForm";
import { Box } from "./styles";
// import ButtonForm from "../../components/InputForm";
// import { toast } from "react-toastify";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Minimo 8 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
      <h3>Login</h3>
      <Box>
        <InputForm
          name="Username"
          password
          secondary
          errors={errors}
          {...register("username")}
        />
        <InputForm
          name="Senha"
          password
          secondary
          errors={errors}
          {...register("password")}
        />
      </Box>
      <button type="submit">Entrar</button>
    </FormContainer>
  );
};

export default LoginForm;
