import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
export default function Formulario() {
  const times = [
    "Programação",
    "Front-end",
    "Data-Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criação do card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Informe o seu nome" />
        <CampoTexto label="Cargo" placeholder="Informe o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Times" itens={times} />
        <Botao textoBotao={"Criar card"} />
      </form>
    </section>
  );
}