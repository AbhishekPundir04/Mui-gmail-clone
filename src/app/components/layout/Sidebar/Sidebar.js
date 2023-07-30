import { Button } from "@mui/material";
import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./Sidebar.scss";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import GradeIcon from "@mui/icons-material/Grade";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import CategoryIcon from "@mui/icons-material/Category";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../../redux/features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<ModeEditIcon />}
        className="compose_button"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={200}
        isActive={true}
      />
      <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" />
      <SidebarOptions Icon={GradeIcon} title="Starred" />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Important"
        
      />
      <SidebarOptions Icon={DraftsIcon} title="Sent"  />
      <SidebarOptions Icon={SendIcon} title="Draft"  />
      <SidebarOptions Icon={CategoryIcon} title="Category" />
      <SidebarOptions Icon={VideocamIcon} title="Meeting"  />
      <SidebarOptions Icon={KeyboardIcon} title="Join a Meeting"/>
    </div>
  );
};

export default Sidebar;
