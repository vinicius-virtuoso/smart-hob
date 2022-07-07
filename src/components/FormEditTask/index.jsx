import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxForm, ContainerForm, FormNT, SwitchQuantity } from "./style";
import InputGroupTask from "../InputGroupTask";
import SelectForm from "../SelectForm";
import ButtonForm from "../ButtonForm";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { UserContext } from "../../Context/Provider/User";
import { api_habits } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormEditTask = ({ hobbieId }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [achivedTask, setAchivedTask] = useState(false);
  const { userHobbies, token, get_user_hobbies } = useContext(UserContext);
  const edit = userHobbies.filter((el) => el.id === Number(hobbieId));

  const schema = yup.object().shape({
    achieved: yup.boolean().default(() => achivedTask),
    how_much_achieved: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onEditTask = (data) => {
    delete data.title;
    delete data.category;
    delete data.difficulty;
    delete data.frequency;

    console.log(data);

    api_habits
      .patch(`habits/${edit[0].id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Hábito atualizado com sucesso");
        get_user_hobbies();
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => setChecked(event.target.checked);

  useEffect(() => {
    if (edit[0]?.achieved) {
      setAchivedTask(edit[0].achieved);
    }
  }, [edit]);

  return (
    <div>
      <ContainerForm>
        <BoxForm>
          <FormNT onSubmit={handleSubmit(onEditTask)}>
            <InputGroupTask
              name="title"
              label="Título"
              register={register}
              value={edit[0]?.title}
              disabled="disabled"
            />

            <SelectForm
              register={register}
              nameSelect="category"
              label="Categoria"
              value={edit[0]?.category}
              disabled="disabled"
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
              value={edit[0]?.difficulty}
              disabled="disabled"
              datasArray={["Fácil", "Médio", "Difícil"]}
            />

            <SelectForm
              register={register}
              nameSelect="frequency"
              label="Frequência"
              value={edit[0]?.frequency}
              disabled="disabled"
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
              />

              <FormControlLabel
                control={
                  <Switch
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

export default FormEditTask;
