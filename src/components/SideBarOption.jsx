import React from "react";
import "./SideBarOption.css";

function SideBarOption({ title, Icon }) {
  return (
    <div className="sideBarOption">
      <p>{title}</p>
    </div>
  );
}

export default SideBarOption;
