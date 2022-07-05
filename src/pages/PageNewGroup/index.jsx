
import FormNewGroup from "../../components/FormNewGroup";
import ImageCommunity from "../../Assets/Img/undraw_community_re_cyrm.svg";
import { HeaderForm } from "./style";

const PageNewGroup = () => {
  return (
    <>
      <HeaderForm>
        <img src={ImageCommunity} alt="Comunidade e novos grupos" />
        <h3>Novo grupo</h3>
      </HeaderForm>
      <FormNewGroup />
    </>
  );
};

export default PageNewGroup;

