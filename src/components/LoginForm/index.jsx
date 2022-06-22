import { FormContainer } from "../LoginForm/styles"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import InputForm from '../../components/InputForm'
import ButtonForm from '../../components/InputForm'
// import { toast } from "react-toastify";


const LoginForm = ({}) => {

  // const onSubmitFunction = (data) => {
  //   .then((res) => {
  //   }).catch((err) => toast.error('Email ou senha inválido') )
  // }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório!'),
    password: yup
      .string()
      .min(8, 'Minimo 8 digitos')
      .required('Campo obrigatório!'),
  })

  const { 
    register, 
    handleSubmit, 
    formState:{errors} 
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (

    <FormContainer onSubmit={handleSubmit}>
      <h3>Login</h3>
      <InputForm type="text" {...register('email')}/>
      {errors.email?.message}
      <InputForm type="password" {...register('password')} />
      {errors.password?.message}
      <ButtonForm type="submit">Entrar</ButtonForm>
    </FormContainer>

  )

}

export default LoginForm