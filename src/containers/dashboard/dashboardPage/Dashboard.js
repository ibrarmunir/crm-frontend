import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "components/buttons/Button";
import DashboardTicketTable from "../dashboardTicketTable/DashboardTicketTable";
import ticketsData from "assets/data/tickets.json";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { ticketTableHeader } from "constant";

const dashboardBreadcrumbItems = [
  { name: "Home", routerLink: "/" },
  { name: "Dashboard", routerLink: "/dashboard" },
];

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb items={dashboardBreadcrumbItems} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button variant="info">Add New Tickets</Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 40</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <DashboardTicketTable header={ticketTableHeader} data={ticketsData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
