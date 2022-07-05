import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNewTask } from "../../Context/NewTask";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxForm, ContainerForm, FormNT, SwitchQuantity } from "./style";
import InputGroupTask from "../InputGroupTask";
import SelectForm from "../SelectForm";
import ButtonForm from "../ButtonForm";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import jwt_decode from "jwt-decode";

const FormNewTask = () => {
  const [checked, setChecked] = useState(false);
  const [token] = useState(localStorage.getItem("@Smart-hob/token") || "");

  const decoder = jwt_decode(token);
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
    user: yup.number().default(() => decoder.user_id),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { newTask } = useNewTask();

  const onNewTask = (data) => {
    newTask(data);
  };

  const handleChange = (event) => setChecked(event.target.checked);

  // let user_id = { ...register("user", decoder.user_id) };

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   user_id;
  // }, []);

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
                control={
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    color="warning"
                    {...register("achieved")}
                  />
                }
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
