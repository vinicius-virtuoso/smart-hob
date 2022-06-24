import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "../../components/InputForm";
import Form from "../Form";
import 'react-toastify/dist/ReactToastify.min.css'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import api from '../../services/api'



const LoginForm = () => {

  const navigate = useNavigate()

  const listInputs = 
  [
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
  ]
  
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório!"),

  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitFunction = (data) => {
    api.post('/sessions/', data)
    .then((data) => {
      const access = data.data.access
      localStorage.setItem("@Smart-hob/token", JSON.stringify(access))
      return navigate("/home")
    }).catch((err) => {
      toast.error("Email ou senha inválido", {
        position: toast.POSITION.TOP_LEFT
      })
    })
    reset()
  }

  return (
    
    <Form title="Login" theme="primary" onSubmit={handleSubmit(onSubmitFunction)}>

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

  )

}
export default LoginForm;