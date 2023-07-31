import React from "react";
import "./login.scss";
import { Button } from "@mui/material";
import { auth, provider } from "../../app/firebase/firebase";
import { useDispatch } from "react-redux";
import { signin } from "../../app/redux/features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          signin({
            displayName: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login_wrapper">
      <div className="login">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?size=690:388"
          alt="gmail_logo"
        />
        <Button variant="contained" className="gmail_login" onClick={login}>
          Login with gmail
        </Button>
      </div>
    </div>
  );
};

export default Login;
