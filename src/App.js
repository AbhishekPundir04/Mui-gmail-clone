import "./App.scss";
import Email from "./app/components/Email/Email";
import Sidebar from "./app//components/layout/Sidebar/Sidebar";
import Header from './app/components/layout/Header/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar />
        <Email />
      </div>
    </div>
  );
}

export default App;
