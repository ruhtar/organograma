import "./Formulario.css";
import CampoTexto from "../CampoTexto";
export default function Formulario() {
  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Informe o seu nome" />
        <CampoTexto label="Cargo" placeholder="Informe o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereco da imagem" />
      </form>
    </section>
  );
}
