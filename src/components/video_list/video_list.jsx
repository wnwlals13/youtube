import React from "react";
import VideoItem from "../video_item/video";
import styles from "./video_list.module.css";

const VideoList = ({ youtubes, onVideoClick, display }) => {
  return (
    <>
      <div className={styles.videos}>
        {youtubes.map((youtube) => (
          <VideoItem
            key={youtube.id}
            youtube={youtube}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
      </div>
    </>
  );
};

export default VideoList;
