import "./Formulario.css";
import { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
export default function Formulario(props) {
  function aoSalvar(event) {
    event.preventDefault();
    props.aoSalvarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
  }

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criação do card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          placeholder="Informe o seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Informe o seu cargo"
          obrigatorio={true}
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        />
        <ListaSuspensa
          label="Times"
          itens={props.times}
          obrigatorio={true}
          valor={time}
          aoAlterar={valor => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
}
