export const screens = [
  {
    path: "/",
    key: "login",
    filePath: "Entry/EntryPage/EntryPage",
    exact: true,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    key: "dashboard",
    filePath: "dashboard/dashboardPage/Dashboard",
    exact: true,
    isPrivate: true,
  },
  {
    path: "/add-ticket",
    key: "add ticket",
    filePath: "tickets/addTicketPage/AddTicket",
    exact: true,
    isPrivate: true,
  },
  {
    path: "/tickets",
    key: "tickets",
    filePath: "tickets/listTicketsPage/ListTickets",
    exact: true,
    isPrivate: true,
  },
  {
    path: "/ticket/:id",
    key: "ticket",
    filePath: "tickets/ticketDetailPage/TicketDetail",
    exact: true,
    isPrivate: true,
  },
];
