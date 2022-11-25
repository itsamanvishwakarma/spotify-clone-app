import React from "react";
import "./Footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import MicIcon from "@mui/icons-material/Mic";
import DevicesIcon from "@mui/icons-material/Devices";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="" alt="" />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <MicIcon />
          </Grid>
          <Grid item>
            <QueueMusicIcon />
          </Grid>
          <Grid item>
            <DevicesIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
