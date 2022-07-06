import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxForm, ContainerForm, FormNT, SwitchQuantity } from "./style";
import InputGroupTask from "../InputGroupTask";
import SelectForm from "../SelectForm";
import ButtonForm from "../ButtonForm";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { api_habits } from "../../services/api";
import { UserContext } from "../../Context/Provider/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormNewTask = () => {
  const { token, user, get_user_hobbies } = useContext(UserContext);
  const navigate = useNavigate();

  const how_much_ach = 0;

  const schema = yup.object().shape({
    title: yup.string().required("Campo necessário: Nome da atividade"),
    category: yup.string().required("Campo necessário: Categoria da atividade"),
    difficulty: yup
      .string()
      .required("Campo necessário: Dificuldade da atividade"),
    frequency: yup
      .string()
      .required("Campo necessário: Frequencia da atividade"),
    achieved: yup.boolean(),
    how_much_achieved: yup.number().default(() => how_much_ach),
    user: yup.number().default(() => user.id),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onNewTask = (data) => {
    api_habits
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        get_user_hobbies();
        toast.success("Atividade criada com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ContainerForm>
        <BoxForm>
          <FormNT onSubmit={handleSubmit(onNewTask)}>
            <InputGroupTask
              name="title"
              label="Título"
              register={register}
              erro={!!errors?.title}
              messageErro={errors.title?.message}
            />

            <SelectForm
              register={register}
              nameSelect="category"
              label="Categoria"
              erro={!!errors?.category}
              messageErro={errors.category?.message}
              datasArray={[
                "Meditação",
                "Pintura",
                "Aulas de Teatro",
                "Esporte",
                "Academia",
                "Música",
                "Dança",
                "Artes visuais",
                "Culinária",
                "Jogos de tabuleiro",
                "Passeios e/ou Viagens",
              ]}
            />

            <SelectForm
              register={register}
              nameSelect="difficulty"
              label="Dificuldade"
              erro={!!errors?.difficulty}
              messageErro={errors.difficulty?.message}
              datasArray={["Fácil", "Médio", "Difícil"]}
            />

            <SelectForm
              register={register}
              nameSelect="frequency"
              label="Frequência"
              erro={!!errors?.frequency}
              messageErro={errors.frequency?.message}
              datasArray={[
                "Diária",
                "Semana",
                "Quinzenal",
                "Mensal",
                "Semestral",
                "Anual",
              ]}
            />

            <SwitchQuantity>
              <InputGroupTask
                name="how_much_achieved"
                label="Quanto foi feito"
                register={register}
                disabled="disabled"
                value={0}
              />

              <FormControlLabel
                control={<Switch color="warning" {...register("achieved")} />}
                label="Finalizado"
              />
            </SwitchQuantity>
            <ButtonForm type="submit" tertiary>
              Salvar
            </ButtonForm>
          </FormNT>
        </BoxForm>
      </ContainerForm>
    </div>
  );
};

export default FormNewTask;
