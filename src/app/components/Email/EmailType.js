import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import "./EmailType.scss";
const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype_options">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype_options">
        <GroupIcon />
        <p>Social</p>
      </div>
      <div className="emailtype_options">
        <GroupIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
