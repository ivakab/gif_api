import axios from "axios";

class _ApiGIF {
  instance: any;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://api.giphy.com/v1/gifs/",
      params: {
        api_key: "BDDzKplHkFro1paTtjExAoXrYxLqCpU8",
        limit: 20,
      },
    });
  }

  async getRequest(url: string, params?: { [key: string]: string }) {
    const res = await this.instance.get(url, { params });
    return res.data;
  }
  async searchByQuery(query: string) {
    return this.getRequest("search", { q: query });
  }
  async getTrending() {
    return this.getRequest("trending");
  }
  async searchTranslate(query: string, scale: any) {
    return this.getRequest("translate", { s: query, weirdness: scale });
  }
}

export const ApiGIF = new _ApiGIF();
