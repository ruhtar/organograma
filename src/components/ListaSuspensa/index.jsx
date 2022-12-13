import "./ListaSuspensa.css";

export default function ListaSuspensa(props) {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
