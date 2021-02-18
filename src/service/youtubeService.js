"use strict";

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=26&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=26&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async channelInfo(channelId) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=UCTcM7FakZSYOTYif6h1LeHQ&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
}

export default Youtube;
