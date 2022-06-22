import InputForm from "./components/InputForm";
import Rotas from "./routes";

function App() {
  const errors = {
    username: {
      message: "Senha contem no mínimo 8 caracteres",
    },
  };

  return (
    <>
      <Rotas />
      <InputForm name="Username" type="text" primary login errors={errors} />
    </>
  );
}

export default App;
