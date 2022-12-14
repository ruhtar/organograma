import "./Colaborador.css";

export default function Colaborador({ nome, cargo, imagem }) {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt="Foto de perfil do colaborador" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
