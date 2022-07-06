import * as yup from "yup";
import InputGroupTask from "../InputGroupTask";
import ButtonForm from "../ButtonForm";
import SelectForm from "../SelectForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxForm, ContainerForm } from "./style";

import { api_habits } from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../Context/Provider/User";
import { useNavigate } from "react-router-dom";

const FormNewGroup = () => {
  const { token, get_user_groups } = useContext(UserContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo necessário: Nome do grupo"),
    description: yup.string().required("Campo necessário: Descrição do grupo"),
    category: yup.string().required("Campo necessário: Categoria do grupo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onNewGroup = (data) => {
    api_habits
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        get_user_groups();
        toast.success("Novo grupo adicionado");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ContainerForm>
        <BoxForm>
          <form onSubmit={handleSubmit(onNewGroup)}>
            <InputGroupTask
              label="Título"
              name="name"
              erro={!!errors?.name}
              messageErro={errors.name?.message}
              register={register}
            />

            <InputGroupTask
              label="Descrição"
              name="description"
              size="10rem"
              register={register}
              erro={!!errors?.description}
              messageErro={errors.description?.message}
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

            <ButtonForm type="submit" secondary>
              Salvar
            </ButtonForm>
          </form>
        </BoxForm>
      </ContainerForm>
    </div>
  );
};

export default FormNewGroup;
