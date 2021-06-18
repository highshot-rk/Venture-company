import React from "react";
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Diverse(props) {

  const playIcon = () => {
    return (
      <div className="play-icon">
        <PlayArrowIcon className="icon" />
      </div>
    )
  }

  return (
    <div className="about-diverse">
      <div className="navigation-title">
        <span className="black">Diverse </span>
        <span className="primary">Environment</span>
      </div>
      <div className="description">We offer a diverse environment for consultants who want to expand their knowledge and experience working with some of the best talents and innovative ideas in the world.</div>
      <div className="video-container">
        <ReactPlayer
          url='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
          controls
          playIcon={playIcon()}
          light
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Diverse);