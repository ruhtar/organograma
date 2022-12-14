import "./Time.css";

export default function Time(props) {
  return (
    <section className="time">
      {props.times.map(item => {
        return <h3>{item.nome}</h3>;
      })}
    </section>
  );
}
