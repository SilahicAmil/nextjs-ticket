import classes from "./TicketsTable.module.css";

const TicketsTable = (props) => {
  return (
    <>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Ticket Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
          </tr>
        </tbody>
        <tbody></tbody>
      </table>
    </>
  );
};

export default TicketsTable;
