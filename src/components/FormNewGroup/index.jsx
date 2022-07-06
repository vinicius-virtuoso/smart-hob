import * as yup from "yup";
import InputGroupTask from "../InputGroupTask";
import ButtonForm from "../ButtonForm";
import SelectForm from "../SelectForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AreaTextArea,
  BoxForm,
  ContainerForm,
  ContainerTextArea,
  LabelTextArea,
  MessageErro,
} from "./style";
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

  const { newGroup } = useNewGroup();

  const onNewGroup = (data) => {
    newGroup(data);
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

            <ContainerTextArea erro={!!errors?.description}>
              <LabelTextArea erro={!!errors?.description}>
                Descrição
              </LabelTextArea>
              <AreaTextArea
                name="description"
                rows={5}
                cols={35}
                {...register("description")}
              />
            </ContainerTextArea>
            <MessageErro>
              {!!errors?.description && errors.description?.message}
            </MessageErro>

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
