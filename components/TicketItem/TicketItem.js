const TicketItem = (props) => {
  return (
    <li>
      <div>
        <h1>{props.title}</h1>
      </div>
      <section>
        <span>{props.name}</span>
        <p>{props.description}</p>
      </section>
    </li>
  );
};

export default TicketItem;
