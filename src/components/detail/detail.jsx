import React from "react";
import Navbar from "../navbar/navbar";
import styles from "./detail.module.css";

const Detail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        type="text/html"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        src={`https://www.youtube.com/embed/${video.id}`}
      />
      <br />
      <br />
      <h2>{video.snippet.title}</h2>
      <br />
      <hr></hr>
      <br />
      <h3>{video.snippet.cannelTitle}</h3>
      <div>{video.snippet.description}</div>
    </section>
  );
};
export default Detail;
