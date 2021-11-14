import "./App.css";
import { EntryPage } from "containers/Entry/EntryPage/EntryPage";
import Wrapper from "components/layouts/wrapper/Wrapper";
import Dashboard from "containers/dashboard/dashboardPage/Dashboard";
import AddTicket from "containers/tickets/addTicketPage/AddTicket";
import ListTickets from "containers/tickets/listTicketsPage/ListTickets";
import TicketDetail from "containers/tickets/ticketDetailPage/TicketDetail";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "containers/Routes";

function App() {
  return (
    <div className="App">
      {/*<EntryPage /> <Dashboard /> <AddTicket /> <ListTickets /> */}
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
