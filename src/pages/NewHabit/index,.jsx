import FormNewTask from "../../components/FormNewTask";
import ImageNewTask from "../../Assets/Img/undraw_taking_notes_re_bnaf.svg";
import { HeaderNewTask, ImageHeader } from "./style";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PageNewHabit = () => {
  return (
    <>
      <HeaderNewTask>
        <Link to="/dashboard">
          <AiOutlineArrowLeft size={24} />
        </Link>

        <ImageHeader>
          <img src={ImageNewTask} alt="Crie uma nova atividade" />
          <h3>Novo Hábito</h3>
        </ImageHeader>
      </HeaderNewTask>
      <FormNewTask />
    </>
  );
};
export default PageNewHabit;
