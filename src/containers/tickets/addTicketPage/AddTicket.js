import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import AddTicketForm from "../addTicketForm/AddTicketForm";
import Jumbotron from "react-bootstrap/Jumbotron";

const breadcrumbItems = [{ name: "Add Ticket", routerLink: "/add-ticket" }];

const initialState = {
  subject: "",
  date: "",
  details: "",
};

const AddTicket = () => {
  const hanldeAddTicketForm = (values) => {
    console.log(values);
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
          <Jumbotron className="bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <AddTicketForm
              initialState={initialState}
              onSubmit={hanldeAddTicketForm}
            />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
