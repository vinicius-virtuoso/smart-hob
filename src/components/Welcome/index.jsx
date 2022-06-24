import {ButtonForm} from "../ButtonForm"
import { useNavigate } from "react-router-dom"
import ImgIndex from "../../Assets/Img/img-index2.svg"
import { Box1, Container,Div,H1,P, Box2 } from "./styles";

const Welcome = () =>{

    const navigate = useNavigate();

    return(
        <Container>
            <Box1>
                <img src={ImgIndex} alt="imagem" />
                <Div>
                    <H1>SmartHob</H1>
                    <P>Gerencie seus hobbies onde você estiver.</P>
                </Div>
            </Box1>
            <Box2>
                <ButtonForm primary onClick={()=> navigate("/register")}>
                    {<p>Cadastre-se</p>}
                </ButtonForm>
                <ButtonForm secondary onClick={()=> navigate("/login")}>
                    {<p>Login</p>}
                </ButtonForm>
            </Box2>

        </Container>
    )
}
export default Welcome