import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TicketTable = ({ header = [], data = [] }) => {
  return (
    <Table>
      <thead>
        <tr>
          {header.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((ticket, index) => (
          <tr key={index}>
            <td>{ticket.id}</td>
            <Link to={`ticket/${ticket.id}`}>
              <td>{ticket.subjects}</td>
            </Link>
            <td>{ticket.status}</td>
            <td>{ticket.addedAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TicketTable;
