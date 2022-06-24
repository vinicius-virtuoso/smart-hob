import * as yup from "yup";
import InputGroupTask from "../InputGroupTask";
import SelectForm from "../SelectForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxForm, ContainerForm, HeaderForm } from "./style";
import { useNewGroup } from "../../Context/NewGroup";

const FormNewGroup = () => {
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

  // const { newGroup } = useNewGroup();

  const onNewGroup = (data) => {
    console.log(data);
    // newGroup(data);
  };

  return (
    <div>
      <HeaderForm>
        <h3>Novo grupo</h3>
      </HeaderForm>

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

            {/* <ButtonForm primary text="Entrar" /> */}

            <button type="submit">Salvar</button>
          </form>
        </BoxForm>
      </ContainerForm>
    </div>
  );
};

export default FormNewGroup;
