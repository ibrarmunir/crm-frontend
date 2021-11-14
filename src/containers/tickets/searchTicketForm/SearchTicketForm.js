import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchTicketForm = ({
  value,
  onChange = () => {},
  onBlur = () => {},
}) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Search
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="search"
            placeholder="Search Tickets"
            id="search"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          ></Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchTicketForm;
