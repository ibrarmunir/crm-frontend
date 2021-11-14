import React from "react";
import TicketTable from "containers/tickets/ticketTable/TicketTable";

const DashboardTicketTable = ({ header = [], data = [] }) => {
  return <TicketTable header={header} data={data} />;
};

export default DashboardTicketTable;
