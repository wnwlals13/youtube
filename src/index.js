import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";
import axios from "axios";
const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const videos = new Youtube(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App videos={videos} />
  </React.StrictMode>,
  document.getElementById("root")
);
