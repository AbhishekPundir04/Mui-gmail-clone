import "./App.scss";
import Email from './app/components/layout/Email/Email'
import Sidebar from "./app//components/layout/Sidebar/Sidebar";
import Header from './app/components/layout/Header/Header'
import Compose from "./app/components/compose/Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./app/redux/features/mailSlice";


function App() {
  const isOpen = useSelector(selectSendMessageIsOpen)
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar />
        <Email/>
      </div>
      {isOpen &&  <Compose/> }
     
    </div>
  );
}

export default App;
