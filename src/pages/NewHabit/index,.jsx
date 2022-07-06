import FormNewTask from "../../components/FormNewTask";
import ImageNewTask from "../../Assets/Img/undraw_taking_notes_re_bnaf.svg";
import { HeaderNewTask } from "./style";

const PageNewHabit = () => {
  return (
    <>
      <HeaderNewTask>
        <img src={ImageNewTask} alt="Crie uma nova atividade" />
        <h3>Nova Hábito</h3>
      </HeaderNewTask>
      <FormNewTask />
    </>
  );
};
export default PageNewHabit;
