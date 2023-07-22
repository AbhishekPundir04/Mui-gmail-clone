import React from "react";
import "./SidebarOptions.scss";

const SidebarOptions = ({ Icon, title, number, isActive }) => {
  return (
    <div className={`sideoptions-main ${isActive && "sidebarOptions--active"}`}>
      <Icon className="icons" />
      <h4 className="title">{title}</h4>
      <p className="number">{number}</p>
    </div>
  );
};

export default SidebarOptions;
