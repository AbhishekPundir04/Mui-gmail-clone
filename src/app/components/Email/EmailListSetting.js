import { IconButton } from "@mui/material";
import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RefreshIcon from '@mui/icons-material/Refresh';
import "./EmailListSetting.scss";
const EmailListSetting = () => {
  return (
    <div className="emailist_setting">
      <div className="emailist_settingLeft">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </div>
      <div className="emailist_settingRight">
        <p>1-50 of 10,2222</p>

        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailListSetting;
