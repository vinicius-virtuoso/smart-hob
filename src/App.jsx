import SelectForm from "./components/Select";
import Rotas from "./routes";

function App() {
  return (
    <>
      <Rotas />
      <SelectForm
        label="Categoria"
        // datas={[
        //   "Selecione",
        //   "Meditação",
        //   "Pintura",
        //   "Aula de Teatro",
        //   "Esporte",
        //   "Academia",
        //   "Música",
        //   "Dança",
        //   "Artes Visuais",
        //   "Culinária",
        //   "Jogos de Tabuleiro",
        //   "Passeios/Viajens",
        // ]}
      />
    </>
  );
}

export default App;
