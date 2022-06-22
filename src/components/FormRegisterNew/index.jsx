import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, BoxOne, BoxRegister } from "./styles";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.min.css'
import { toast } from 'react-toastify';



const FormRegisterNew = () => {

    const formSchema = yup.object().shape({
        username: yup.string().required('Nome completo obrigatório').min(6, "Mínimo 6 caracteres."),
        email: yup.string().email('E-mail invalido').required("E-mail obrigatório").min(10),
        password: yup.string().required("").matches("^(?=.*[A-Z])", "Necessária 1 letra maiúscula.").matches("^(?=.*[a-z])", "Necessária 1 letra minúscula.")
            .matches("^(?=.*[0-9])", "Necessária ter 1 numero").matches("^(?=.*[!#@$%&])", "Necessária 1 caractere especial").min(8, "Necessária no mínimo 8 caracteres."),
        confirmPassword: yup.string().required('Confirmação de senha necessária').oneOf([yup.ref('password')],
            'As senhas devem corresponder')
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })
    const formSubmit = ({ username, email, password }) => {
        const user = { username, email, password };
        axios.post(`https://kenzie-habits.herokuapp.com/users/`, user)
        .then((res)=>{
            
        })
        .catch(err =>{            
            toast.error("Usuário já existente",{
                position: toast.POSITION.TOP_RIGHT
            })
        }
        )
        
        reset()
    }

    return (

        <Container>
            <BoxOne>
                <h3>Cadastra-se</h3>
            </BoxOne>
            <form onSubmit={handleSubmit(formSubmit)}>
                <input type="text" placeholder='username' {...register("username")} />
                <input type="text" placeholder='email'{...register("email")} />
                <input type="text" placeholder="senha" {...register("password")} />
                <input type="text" placeholder='Confirme Senha' {...register("confirmPassword")} />
                <button>
                    <p>Cadastrar</p>
                </button>


            </form>
            <BoxRegister>
                <p>Já tem um cadastro?
                    <button>
                    Faça seu 
                        <span> Login</span>
                    </button>
                </p>

            </BoxRegister>
        </Container>
    )

}
export default FormRegisterNew   