import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import "./EmailType.scss";
const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype_options emailtype__options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype_options">
        <GroupIcon />
        <p>Social</p>
      </div>
      <div className="emailtype_options">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
