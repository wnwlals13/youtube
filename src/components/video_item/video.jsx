import React, { memo } from "react";
import styles from "./video.module.css";

const VideoItem = memo(
  ({ youtube, youtube: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(youtube)}
      >
        <img
          alt="thumbnails"
          src={snippet.thumbnails.medium.url}
          className={styles.thumbnail}
        ></img>
        <div className={styles.metadata}>
          <img
            className={styles.chIcon}
            src="../images/user.png"
            alt="channel"
          />
          <div className={styles.videoDescription}>
            <div className={styles.title}>{snippet.title}</div>
            <div className={styles.channel}>{snippet.channelTitle}</div>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
