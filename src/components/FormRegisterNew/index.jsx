import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, BoxOne, BoxRegister, Form } from "./styles";
import { api_habits } from "../../services/api";
import { toast } from "react-toastify";
import InputForm from "../InputForm";
import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../ButtonForm";

const FormRegisterNew = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome de usuário necessária")
      .min(6, "Mínimo 6 caracteres.")
      .max(15, "Máximo de 15 caracteres."),
    email: yup
      .string()
      .email("E-mail invalido")
      .required("E-mail necessária")
      .min(10),
    password: yup
      .string()
      .required("Senha necessária")
      .matches("^(?=.*[A-Z])", "Necessária 1 letra maiúscula.")
      .matches("^(?=.*[a-z])", "Necessária 1 letra minúscula.")
      .matches("^(?=.*[0-9])", "Necessária ter 1 numero")
      .matches("^(?=.*[!#@$%&])", "Necessária 1 caractere especial")
      .min(8, "Necessária no mínimo 8 caracteres."),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha necessária")
      .oneOf([yup.ref("password")], "As senhas devem corresponder"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const formSubmit = ({ username, email, password }) => {
    const user = { username, email, password };
    api_habits
      .post(`users/`, user)
      .then((_) => {
        toast.success("Cadastro realizado co sucesso!");
        navigate("/login");
      })
      .catch((_) => {
        toast.error("Nome de usuário já existente", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    reset();
  };

  return (
    <Container>
      <BoxOne>
        <h3>Cadastre-se</h3>
      </BoxOne>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <InputForm
          name="username"
          type={"text"}
          theme={"secondary"}
          errors={errors["username"]}
          register={register}
          label="Nome de usuário"
        />
        <InputForm
          name="email"
          type={"text"}
          theme={"secondary"}
          errors={errors["email"]}
          register={register}
          label="E-mail"
        />
        <InputForm
          name="password"
          type={"password"}
          theme={"secondary"}
          errors={errors["password"]}
          register={register}
          label="Senha"
        />
        <InputForm
          name="confirmPassword"
          type={"password"}
          theme={"secondary"}
          errors={errors["confirmPassword"]}
          register={register}
          label="Confirma a Senha"
        />

        <ButtonForm primary>Cadastrar</ButtonForm>
      </Form>
      <BoxRegister>
        <p>
          Já tem um cadastro?
          <button onClick={() => navigate("/login")}>Faça seu Login</button>
        </p>
      </BoxRegister>
    </Container>
  );
};
export default FormRegisterNew;
