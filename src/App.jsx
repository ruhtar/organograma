import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import { useState } from "react";
function App() {
  const [colaboradores, setColaborador] = useState([]); //um array vazio como valor inicial

  function adicionarColaborador(colaborador) {
    console.log(colaborador);
    setColaborador([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoSalvarColaborador={colaborador => adicionarColaborador(colaborador)}
      />
    </div>
  );
}

export default App;
