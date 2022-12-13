import "./ListaSuspensa.css";

export default function ListaSuspensa(props) {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={evento => props.aoAlterar(evento.target.value)}
      >
        {props.itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
