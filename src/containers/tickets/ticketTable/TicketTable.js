import Table from "react-bootstrap/Table";

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
            <td>{ticket.subjects}</td>
            <td>{ticket.status}</td>
            <td>{ticket.addedAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TicketTable;
