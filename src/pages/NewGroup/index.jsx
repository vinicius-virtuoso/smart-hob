import FormNewGroup from "../../components/FormNewGroup";
import ImageCommunity from "../../Assets/Img/undraw_community_re_cyrm.svg";
import { HeaderForm, ImageHeader } from "./style";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PageNewGroup = () => {
  return (
    <>
      <HeaderForm>
        <Link to="/dashboard">
          <AiOutlineArrowLeft size={24} />
        </Link>

        <ImageHeader>
          <img src={ImageCommunity} alt="Comunidade e novos grupos" />
          <h3>Novo grupo</h3>
        </ImageHeader>
      </HeaderForm>
      <FormNewGroup />
    </>
  );
};

export default PageNewGroup;
