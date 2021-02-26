import axios from "axios";

class Youtube {
  constructor(httpClient) {
    //base youtube client
    this.client = httpClient;
  }

  async mostPopular() {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 26,
        regionCode: "KR",
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.client.get("search", {
      params: {
        part: "snippet",
        maxResults: 26,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
