import "./App.css";
import { EntryPage } from "containers/Entry/EntryPage/EntryPage";
import Wrapper from "components/layouts/wrapper/Wrapper";
import Dashboard from "containers/dashboard/dashboardPage/Dashboard";
import AddTicket from "containers/tickets/addTicketPage/AddTicket";

function App() {
  return (
    <div className="App">
      {/*<EntryPage /> <Dashboard />*/}
      <Wrapper>
        <AddTicket />
      </Wrapper>
    </div>
  );
}

export default App;
