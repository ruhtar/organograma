import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Time from "./components/Time";
function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data-Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaborador] = useState([]); //um array vazio como valor inicial

  function adicionarColaborador(colaborador) {
    console.log(colaborador);
    setColaborador([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(item => item.nome)}
        aoSalvarColaborador={colaborador => adicionarColaborador(colaborador)}
      />
      {times.map(time => {
        return (
          <Time
            nome={time.nome}
            key={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
          ></Time>
        );
      })}
    </div>
  );
}

export default App;
