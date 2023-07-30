import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import "./EmailBody.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "../../../redux/features/mailSlice";

const EmailBody = ({ name, subject, message, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const openMessageHandler = () => {
    dispatch(openMessage({
      name,
      subject,
      message,
      time 
    }))
    navigate('/mail')
  };
  return (
    <div className="emailbody" onClick={(e) => openMessageHandler()}>
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelImportantIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody_middle">
        <div className="email_middle_msg">
          <p>
            <b>{subject}</b>
            {message}
          </p>
        </div>
      </div>
      <div className="emailbody_right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailBody;
