import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../Form";
import InputForm from "../InputForm";

const FormRegister = () => {
  const listInputs = [
    {
      name: "username",
      label: "Username",
      type: "text",
      theme: "primary",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      theme: "primary",
    },
    {
      name: "passwordText",
      label: "Senha",
      type: "password",
      theme: "primary",
    },
    {
      name: "passwordConfirm",
      label: "Confirme sua senha",
      type: "password",
      theme: "primary",
    },
  ];

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/^[A-Za-z ]*$/, "Necessário apenas letras no nome"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    passwordText: yup
      .string()
      .min(8, "Minimo 8 digitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("passwordText")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = ({ name, email, password }) => {
    const user = { name, email, password };
    console.log(user);
  };

  console.log(errors);
  return (
    <Form title="Cadastre-se" onSubmit={handleSubmit(formSubmit)}>
      {listInputs.map((input) => (
        <InputForm
          key={input.name}
          label={input.label}
          name={input.name}
          type={input.type}
          theme={input.theme}
          errors={errors[input.name]}
          register={register}
        />
      ))}
    </Form>
  );
};

export default FormRegister;
