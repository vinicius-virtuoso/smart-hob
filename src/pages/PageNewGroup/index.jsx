import FormNewGroup from "../../components/FormNewGroup";
import ImageCommunity from "../../Assets/Img/undraw_community_re_cyrm.svg";
import { BackLink, HeaderForm } from "./style";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const PageNewGroup = () => {
  return (
    <>
      <HeaderForm>
        <BackLink to="/dashboard">
          <span>
            <MdOutlineArrowBackIosNew /> Voltar
          </span>
        </BackLink>
        <img src={ImageCommunity} alt="Comunidade e novos grupos" />
        <h3>Novo grupo</h3>
      </HeaderForm>
      <FormNewGroup />
    </>
  );
};

export default PageNewGroup;
