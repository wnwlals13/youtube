import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Navbar from "./components/navbar/navbar";
import Detail from "./components/detail/detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [detail, setDetail] = useState(null);
  const [channel, setChannel] = useState(null);

  const handleSearch = (query) => {
    youtube //
      .search(query)
      .then((videos) => {
        setVideos(videos);
        setDetail(null);
      });
  };

  const handleDetail = (video) => {
    setDetail(video);
    console.log(video);
  };

  useEffect(() => {
    youtube //
      .mostPopular()
      .then((videos) => {
        setVideos(videos);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Navbar onSearch={handleSearch} />
      <section className={styles.content}>
        {detail && (
          <div className={styles.detail}>
            <Detail video={detail} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            channel={channel}
            onVideoClick={handleDetail}
            display={detail ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
