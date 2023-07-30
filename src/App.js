import "./App.scss";
import Emailist from "./app/components/layout/Email/Emailist";
import Sidebar from "./app/components/layout/Sidebar/Sidebar";
import Header from "./app/components/layout/Header/Header";
import Compose from "./app/components/compose/Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./app/redux/features/mailSlice";
import EmailDetails from "./app/components/layout/Email/EmailDetails";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login/login";
import NotFound from "./app/common/NotFound";
import { selectUser } from "./app/redux/features/userSlice";

function App() {
  const isOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  return (
    <>
      {user ? (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Emailist />} />
              <Route path="/mail" element={<EmailDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {isOpen && <Compose />}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
