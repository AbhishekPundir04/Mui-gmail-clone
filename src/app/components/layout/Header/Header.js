import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton } from "@mui/material";
import "./Header.scss";
import { ArrowDropDown, Search } from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import profilepic from "../../../../assets/images/profilepic.jpg";

const Header = () => {
  return (
    <div className="main">
      <div className="header-first">
        <IconButton>
          <ReorderIcon></ReorderIcon>
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail-logo"
          className="gmail-header-img"
        />
      </div>
      <div className="header-middle">
        <div className="search-mail">
          <IconButton>
            <Search />
          </IconButton>
          <input placeholder="Search in Email" />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div className="header-last">
        <div className="header-icons">
          <IconButton>
            <HelpIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <Avatar src={profilepic} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
