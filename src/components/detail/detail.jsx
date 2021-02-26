import React from "react";
import styles from "./detail.module.css";

const Detail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title="youtube video player"
        width="100%"
        className={styles.ytplayer}
        id="ytplayer"
        src={`https://www.youtube.com/embed/${video.id}`}
      ></iframe>

      <h1 className={styles.title}>{snippet.title}</h1>
      <h3 className={styles.channelId}>{snippet.channelTitle}</h3>
      <br />
      <hr />
      <br />
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default Detail;
