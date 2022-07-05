import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "../../components/InputForm";
import Form from "../Form";
import { api_habits } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/Provider/User";
import { useContext } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken, token } = useContext(UserContext);
  console.log(token);

  const listInputs = [
    {
      name: "username",
      label: "Username",
      type: "text",
      theme: "primary",
    },
    {
      name: "password",
      label: "Senha",
      type: "password",
      theme: "primary",
    },
  ];

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
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
    api_habits
      .post("/sessions/", data)
      .then(({ data }) => {
        setToken(data.access);
        window.localStorage.setItem("@Smart-hob/token", data.access);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Usuário ou senha está incorreto.", {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };

  return (
    <Form
      title="Login"
      theme="primary"
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
