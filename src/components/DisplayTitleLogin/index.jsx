import ImgLogin from '../../Assets/Img/img-login.svg'
import { ContainerLogin, DivTitle, DivImg } from "./styles";


const DisplayTitleLogin = () => {

  return(

    <ContainerLogin>
      <DivTitle>
          <h1>SmartHob</h1>
          <p>Gerencie seus hobbies onde você estiver.</p>
      </DivTitle>
      <DivImg>
          <img src={ImgLogin} alt="imagelogin" />
      </DivImg>
    </ContainerLogin>

  )

}

export default DisplayTitleLogin