import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Button from "components/buttons/Button";
import TicketTable from "containers/tickets/ticketTable/TicketTable";
import SearchTicketForm from "containers/tickets/searchTicketForm/SearchTicketForm";
import { ticketTableHeader } from "constant";
import ticketsData from "assets/data/tickets.json";

const breadcrumbItems = [{ name: "List Ticket", routerLink: "/list-ticket" }];

const ListTickets = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [tickets] = React.useState(ticketsData);
  const [filteredTickets, setFilteredTickets] = React.useState(ticketsData);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      return filterTickets(term);
    }

    setFilteredTickets(tickets);
  };

  const filterTickets = (term) => {
    setFilteredTickets(
      tickets.filter((ticket) => ticket.subjects.toLowerCase().includes(term))
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb items={breadcrumbItems} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchTicketForm onChange={handleChange} value={searchTerm} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketTable header={ticketTableHeader} data={filteredTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default ListTickets;
