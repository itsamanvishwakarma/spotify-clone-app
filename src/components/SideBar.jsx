import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import QueueIcon from "@mui/icons-material/Queue";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDataLayerValue } from "./DataLayer";

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption Icon={HomeIcon} title="Home" />
      <SideBarOption Icon={SearchIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <SideBarOption Icon={QueueIcon} title="Create Playlist" />
      <SideBarOption Icon={FavoriteIcon} title="Liked Songs" />
      <hr />
      {playlists?.items?.map(playlist => (
        <SideBarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
