import "./App.scss";
import Emailist from "./app/components/layout/Email/Emailist";
import Sidebar from "./app/components/layout/Sidebar/Sidebar";
import Header from "./app/components/layout/Header/Header";
import Compose from "./app/components/compose/Compose";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./app/redux/features/mailSlice";
import EmailDetails from "./app/components/layout/Email/EmailDetails";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login/login";
import NotFound from "./app/common/NotFound";
import { selectUser, signin, signout } from "./app/redux/features/userSlice";
import { useEffect } from "react";
import { auth } from "./app/firebase/firebase";

function App() {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signin({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
        }))
      }else{
        dispatch(signout())
      }
    })
  },[dispatch])

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
