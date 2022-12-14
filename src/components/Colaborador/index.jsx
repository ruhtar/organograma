import "./Colaborador.css";

export default function Colaborador(props) {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img
          src="https://github.com/ruhtar.png"
          alt="Foto de perfil do colaborador"
        />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.time}</h5>
      </div>
    </div>
  );
}
