import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Button from "components/buttons/Button";
import ticketsData from "assets/data/tickets.json";
import Message from "components/message/Message";

const ticket = ticketsData[0];

const breadcrumbItems = [{ name: "Ticket", routerLink: "/ticket-detail" }];

const TicketDetail = ({ match }) => {
  const [message, setMessage] = React.useState("");

  const { id } = match.params;

  const handleChange = (event) => {
    const message = event.target.status;
    setMessage(message);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
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
          <div className="subjects">Subjects: {ticket.subjects}</div>
          <div className="date">Date: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {ticket.history.map((msg, index) => {
            return (
              <Message
                key={index}
                message={msg.message}
                date={msg.date}
                sender={msg.sender}
              />
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label htmlFor="message">Reply</Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
              >
                {message}
              </Form.Control>
            </Form.Group>
          </Form>
          <div className="mt-3 text-right">
            <Button type="submit" variant="info">
              Reply
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TicketDetail;
