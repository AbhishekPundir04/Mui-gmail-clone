import React from "react";
import { Button } from "@mui/material";
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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<ModeEditIcon />}
        variant="contained"
        className="compose-btn"
      >
        Compose
      </Button>
      <SidebarOptions Icon={InboxIcon} title={"Inbox"} number={1} />
      <SidebarOptions Icon={WatchLaterIcon} title={"Starred"} number={1} />
      <SidebarOptions Icon={GradeIcon} title={"Snoozed"} number={1} />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title={"Important"}
        number={1}
      />
      <SidebarOptions Icon={SendIcon} title={"Sent"} number={1} />
      <SidebarOptions Icon={DraftsIcon} title={"Draft"} number={1} />
      <SidebarOptions Icon={CategoryIcon} title={"Categories"} number={1} />
      <h3>Meet</h3>
      <SidebarOptions Icon={VideocamIcon} title={"Categories"} number={1} />
      <SidebarOptions Icon={KeyboardIcon} title={"Categories"} number={1} />
    </div>
  );
};

export default Sidebar;
