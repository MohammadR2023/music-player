import React from "react";
import "../index.css";
import list from "../list";
import check from "../functions/Check";
import updateProgressBar from "../functions/prograssbar";

class Player extends React.Component {
  songindex = 0;
  state = {
    music: list[0],
  };

  render() {
    return (
      <>
        <div class="bg-container">
          <img src={this.state.music.cover} alt="" id="background" />
        </div>
        <div class="player-container">
          <div class="img-container">
            <img
              src={this.state.music.cover}
              alt=""
              id="cover"
              class="active"
            />
          </div>
          <h2>{this.state.music.name}</h2>
          <h3>{this.state.music.artist}</h3>
          <audio
            onEnded={this.nexthandler}
            onTimeUpdate={updateProgressBar}
            src={this.state.music.audio}
          ></audio>

          <div class="progress-container" id="progress-container">
            <div class="pro " id="progress"></div>
            <div class="duration-wrapper">
              <span id="current-time"></span>
              <span id="duration"></span>
            </div>
          </div>

          <div class="player-controls">
            <i
              onClick={this.perhandler}
              class="fas fa-backward"
              id="prev"
              title="Previous"
            ></i>
            <i
              onClick={check}
              class="fas fa-play main-button"
              id="play"
              title="Play"
            ></i>
            <i
              onClick={this.nexthandler}
              class="fas fa-forward"
              id="next"
              title="Next"
            ></i>
          </div>
        </div>
      </>
    );
  }
  perhandler = () => {
    this.songindex--;
    const playBtn = document.querySelector("#play");
    if (this.songindex < 0) {
      this.songindex = list.length - 1;
    }
    this.setState({ music: list[this.songindex] });
    document.querySelector("audio").setAttribute("autoPlay", "");
    playBtn.setAttribute("title", "Pause");

    playBtn.classList.replace("fa-play", "fa-pause");
  };
  nexthandler = () => {
    this.songindex++;
    const playBtn = document.querySelector("#play");
    if (this.songindex > list.length - 1) {
      this.songindex = 0;
    }
    this.setState({ music: list[this.songindex] });
    document.querySelector("audio").setAttribute("autoPlay", "");
    playBtn.setAttribute("title", "Pause");
    playBtn.classList.replace("fa-play", "fa-pause");
  };

  get = () => {
    let rangeElem = document.querySelector("#range");
    this.setState({ value: rangeElem.value });
  };
}

export default Player;
