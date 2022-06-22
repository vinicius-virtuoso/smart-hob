import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "../../components/InputForm";
import Form from "../Form";
// import ButtonForm from "../../components/InputForm";
// import { toast } from "react-toastify";

const LoginForm = () => {
  const listInputs = [
    {
      name: "username",
      label: "Username",
      type: "text",
      theme: "secondary",
    },
    {
      name: "password",
      label: "Senha",
      type: "password",
      theme: "secondary",
    },
  ];
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
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
    <Form
      title="Login"
      theme="secondary"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
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

export default LoginForm;
