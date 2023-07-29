import "./App.scss";
import Emailist from "./app/components/layout/Email/Emailist";
import Sidebar from "./app//components/layout/Sidebar/Sidebar";
import Header from "./app/components/layout/Header/Header";
import Compose from "./app/components/compose/Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./app/redux/features/mailSlice";
import EmailDetails from "./app/components/layout/Email/EmailDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const isOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Emailist />}></Route>
          <Route path="/mail" element={<EmailDetails />}></Route>
        </Routes>
      </div>
      {isOpen && <Compose />}
    </div>
  );
}

export default App;
