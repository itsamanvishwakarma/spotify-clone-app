import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption title="Home" />
      <SideBarOption title="Search" />
      <SideBarOption title="Your Library" />
    </div>
  );
}

export default SideBar;
