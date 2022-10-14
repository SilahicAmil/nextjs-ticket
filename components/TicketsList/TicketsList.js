import TicketItem from "../TicketItem/TicketItem";
import classes from "./TicketsList.module.css";

const TicketsList = (props) => {
  return (
    <ul className={classes.container}>
      {props.ticket.map((ticket) => {
        return (
          <TicketItem
            id={ticket.id}
            key={ticket.id}
            title={ticket.title}
            description={ticket.description}
            name={ticket.name}
          />
        );
      })}
    </ul>
  );
};

export default TicketsList;
