import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, TextField } from "@mui/material";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoodIcon from "@mui/icons-material/Mood";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import LockClockIcon from "@mui/icons-material/LockClock";
import CreateIcon from "@mui/icons-material/Create";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import "./Compose.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../../redux/features/mailSlice";
import { db } from "../../firebase/firebase";
import { selectUser } from "../../redux/features/userSlice";
const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      alert("To is empty");
    } else if (subject === "") {
      alert("subject is empty");
    } else if (message === "") {
      alert("message is empty");
    }

    db.collection("emails").add({
      to,
      subject,
      message,
      from: user.email,
      fromName: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTo("");
    setSubject("");
    setMessage("");
    alert("email send sucessfully");
    dispatch(closeSendMessage());
  };

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compse_header_right">
          <RemoveIcon />
          <OpenInFullIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={handlerSubmit}>
        <div className="compose__body">
          <div className="compose_bodyform">
            <TextField
              fullWidth
              type="email"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="text-field-1"
            />
            <TextField
              fullWidth
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              type="text"
              rows="30"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="compose_footer">
          <div className="compose_footer_left">
            <Button type="submit" variant="contained">
              Send
            </Button>
            <ArrowDropDownIcon />
          </div>
          <div className="compose_footer_right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <MoreVertIcon />
            <DeleteIcon />
            <MoodIcon />
            <PhotoSizeSelectActualIcon />
            <LockClockIcon />
            <CreateIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
