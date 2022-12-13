import "./CampoTexto.css";
export default function CampoTexto(props) {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        placeholder={props.placeholder}
        required={props.obrigatorio}
        onChange={evento => props.aoAlterar(evento.target.value)}
      />
    </div>
  );
}
