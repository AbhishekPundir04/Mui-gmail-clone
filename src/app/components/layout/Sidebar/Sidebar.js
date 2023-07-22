import { Button } from "@mui/material";
import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./Sidebar.scss";
import SidebarOptions from "../../../../SidebarOptions";
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
      <Button startIcon={<ModeEditIcon />} className="compose_button">
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={200}
        isActive={true}
      />
      <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" number={100} />
      <SidebarOptions Icon={GradeIcon} title="Starred" number={200} />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Important"
        number={200}
      />
      <SidebarOptions Icon={DraftsIcon} title="Sent" number={200} />
      <SidebarOptions Icon={SendIcon} title="Draft" number={200} />
      <SidebarOptions Icon={CategoryIcon} title="Category" number={200} />
      <SidebarOptions Icon={VideocamIcon} title="Meeting" number={200} />
      <SidebarOptions Icon={KeyboardIcon} title="Join a Meeting" number={200} />
    </div>
  );
};

export default Sidebar;
