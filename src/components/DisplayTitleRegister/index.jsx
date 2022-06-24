import ImgRegister from "../../Assets/Img/img-page-register.svg";
import { Header, Main,H1, P, Container } from "./styles";
const DisplayTitleRegister = () =>{
    return(
        <Main>
            <Header>
                <H1>SmartHob</H1>
                <P>Gerencia seus hobbies onde você estiver</P>
            </Header>
            <Container>
                <img src={ImgRegister} alt="imagem" />
            </Container>

        </Main>
    )
}
export default DisplayTitleRegister