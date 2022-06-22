import SelectForm from "../Select";
// import { InputForm } from "../Input";
import { ContainerFormNewGroups } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormNewGroup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo requerido: Nome do Grupo"),
    description: yup.string().required("Campo requerido: Descrição do Grupo"),
    category: yup.string().required("Campo requerido: Categoria do Grupo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onNewGroup = (data) => {
    console.log(data);
  };

  return (
    <ContainerFormNewGroups>
      <form onSubmit={handleSubmit(onNewGroup)}>
        <input type="text" name="name" {...register("name")} />

        <input type="text" name="description" {...register("description")} />

        {/* <InputForm type={"text"} name="name" placeholder="Nome do novo Grupo" />

        <InputForm
          type={"text"}
          name="description"
          placeholder="Descrição do novo Grupo"
        /> */}

        <SelectForm
          label={"Categoria"}
          registerName="category"
          register={register}
          datas={[
            "Meditação",
            "Pintura",
            "Aulas de Teatro",
            "Esporte",
            "Academia",
            "Música",
            "Dança",
            "Artes Visuais",
            "Culinária",
            "Jogos de Tabuleiro",
            "Passeios/Viagens",
          ]}
        />

        <button type="submit">Adicionar Grupo</button>
      </form>
    </ContainerFormNewGroups>
  );
};

export default FormNewGroup;
