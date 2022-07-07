import ImageNewTask from "../../Assets/Img/undraw_taking_notes_re_bnaf.svg";
import { HeaderNewTask, ImageHeader } from "./style";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FormEditTask from "../../components/FormEditTask";

const PageEditHabit = () => {
  const { id } = useParams();

  return (
    <>
      <HeaderNewTask>
        <Link to="/dashboard">
          <AiOutlineArrowLeft size={24} />
        </Link>

        <ImageHeader>
          <img src={ImageNewTask} alt="Crie uma nova atividade" />
          <h3>Atualize seu hobbie</h3>
        </ImageHeader>
      </HeaderNewTask>
      <FormEditTask hobbieId={id} />
    </>
  );
};
export default PageEditHabit;
