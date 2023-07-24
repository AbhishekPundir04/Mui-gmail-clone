import React from "react";
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

import "./Compose.scss";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../redux/features/mailSlice";
const Compose = () => {
  const dispatch = useDispatch()
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compse_header_right">
          <RemoveIcon />
          <OpenInFullIcon />
         

          <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
        
        </div>
      </div>
      <div className="compose__body">
        <div className="compose_bodyform">
          <TextField fullWidth type="email" placeholder="To" />

          <TextField fullWidth type="email" placeholder="Subject" />
          <textarea type="email" rows="30" />
        </div>
      </div>
      <div className="compose_footer">
        <div className="compose_footer_left">
          <Button variant="contained">Send</Button>
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
    </div>
  );
};

export default Compose;
