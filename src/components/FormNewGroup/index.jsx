import InputGroupTask from "../InputGroupTask";
import SelectForm from "../SelectForm";
import { BoxForm, ContainerForm, HeaderForm } from "./style";

const FormNewGroup = () => {
  return (
    <div>
      <HeaderForm>
        <h3>Novo grupo</h3>
      </HeaderForm>

      <ContainerForm>
        <BoxForm>
          <form
            onSubmit={() => {
              console.log("funfa");
            }}
          >
            <InputGroupTask label="Título" name="title" />
            <InputGroupTask label="Descrição" name="title" size="10rem" />
            <SelectForm
              label="Categoria"
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

            <button type="submit">Salvar</button>
          </form>
        </BoxForm>
      </ContainerForm>
    </div>
  );
};

export default FormNewGroup;
