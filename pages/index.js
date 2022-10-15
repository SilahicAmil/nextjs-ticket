import Head from "next/head";
import TicketsList from "../components/TicketsList/TicketsList";

const DUMMY_TICKETS = [
  {
    id: 1,
    name: "Johnny Smith",
    title: "This is a ticket",
    description: "Error within the hello user page",
  },
  {
    id: 2,
    name: "Johnny Wacky",
    title: "This is a second ticket",
    description: "Error within the welcome user page",
  },
  {
    id: 3,
    name: "Johnny OD",
    title: "This is a third ticket",
    description: "Error within the main user page",
  },
];

console.log(DUMMY_TICKETS);

const MainPage = (props) => {
  return (
    <>
      <h1>Main Page</h1>
      <Head>
        <title>Single Review Ticket</title>
      </Head>

      <TicketsList ticket={props.tickets} suppressHydrationWarning />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      tickets: DUMMY_TICKETS,
    },
  };
}

export default MainPage;
