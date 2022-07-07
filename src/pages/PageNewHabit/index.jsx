import FormNewTask from "../../components/FormNewTask";
import ImageNewTask from "../../Assets/Img/undraw_taking_notes_re_bnaf.svg";
import { BackLink, HeaderNewTask } from "./style";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const PageNewHabit = () => {
  return (
    <>
      <HeaderNewTask>
        <BackLink to="/dashboard">
          <span>
            <MdOutlineArrowBackIosNew /> Voltar
          </span>
        </BackLink>
        <img src={ImageNewTask} alt="Crie uma nova atividade" />
        <h3>Novo hobbie</h3>
      </HeaderNewTask>
      <FormNewTask />
    </>
  );
};
export default PageNewHabit;
