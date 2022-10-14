import Head from "next/head";
import TicketsTable from "../components/TicketsTable/TicketsTable";

const DUMMY_DATA = [
  {
    ticketId: "123123",
    owner: "Johnny Smith",
    title: "This is a ticket",
    description: "Error within the hello user page",
  },
];

const MainPage = (props) => {
  return (
    <>
      <h1>Main Page</h1>
      <Head>
        <title>Single Review Ticket</title>
      </Head>
      <TicketsTable tickets={props.tickets} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      tickets: DUMMY_DATA,
    },
    revalidate: 10,
  };
}

export default MainPage;
