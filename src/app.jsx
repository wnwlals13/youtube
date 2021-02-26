import React, { useCallback, useEffect, useState } from "react";
import Detail from "./components/detail/detail";
import Navbar from "./components/navbar/navbar";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

const App = ({ videos }) => {
  const [youtubes, setYoutubes] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  });
  const search = useCallback((query) => {
    setSelectedVideo(null); //✨ 재검색시 목록을 나가기
    videos //
      .search(query)
      .then((youtubes) => {
        setYoutubes(youtubes);
      });
  }, []);
  useEffect(() => {
    videos
      .mostPopular() //
      .then((youtubes) => setYoutubes(youtubes));
  }, [videos]);
  return (
    <>
      <Navbar onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Detail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            youtubes={youtubes}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </>
  );
};

export default App;
