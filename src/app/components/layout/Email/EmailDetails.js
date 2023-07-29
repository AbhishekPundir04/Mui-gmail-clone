import { Avatar, IconButton } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RefreshIcon from "@mui/icons-material/Refresh";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import ReplyIcon from "@mui/icons-material/Reply";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";

import "./EmailDetails.scss";
const EmailDetails = () => {
  return (
    <div>
      <div className="emailist_setting">
        <div className="emailist_settingLeft">
          <IconButton>
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </div>
        <div className="emaildetail_msg">
          <div className="emailDetails_Right">
            <p>1-50 of 10,2222</p>

            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailbodyhead_main">
          <div className="emailbodyhead_left">
            <h4>This is Subject</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emailbodyhead_right">
            <PrintIcon />
            <IosShareIcon />
          </div>
        </div>
        <div className="emaildetail_header">
          <div className="emaildetail_left">
            <Avatar />
            <h4>Abhishek Pundir</h4>
            <p>abhi@gmail.com</p>
          </div>
          <div className="emaildetail_right">
            <p>Mon, 12 July 2021 14:23:14 GMT</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails_body">
          <p>this is test message</p>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
