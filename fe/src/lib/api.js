import config from "@/lib/config";
import util from "@/lib/util";

const urlcat = require("urlcat").default;

class API {
  // class shit
  static URL = config.env.NEXT_PUBLIC_API_URL;
  static PATH = config.env.NEXT_PUBLIC_API_PATH;
  static TOKEN = config.env.NEXT_PUBLIC_API_TOKEN;
  static HEADERS = {};

  // instance shit
  constructor(options = {}) {
    const api = this;

    api.url = options.url || util.copy(API.URL);
    api.path = options.path || util.copy(API.PATH);
    api.token = options.token || util.copy(API.TOKEN);
    api.headers = options.headers || util.copy(API.HEADERS);
  }

  async fetch(path, options = {}) {
    const url = this.url_for(path, options);
    const headers = this.headers_for(options);
    const method = this.method_for(options);

    const params = {
      headers,
      method,
    };

    let response = undefined;
    let json = undefined;
    let ok = true;
    let errors = [];

    try {
      response = await fetch(url, params);

      // https://beta.nextjs.org/docs/data-fetching/fetching#static-data-fetchingmd
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
    } catch (e) {
      ok = false;
      errors.push(e);
    }

    try {
      json = await response.json();
    } catch (e) {
      ok = false;
      errors.push(e);
    }

    return new API.Result(response, json, ok, errors);
  }

  static Result = class Result {
    constructor(response, json, ok, errors) {
      this.response = response;
      this.json = json;
      this.ok = !!ok;
      this.errors = errors;
    }
  };

  method_for(options = {}) {
    const method = options.method || "GET";
    return method;
  }

  headers_for(options = {}) {
    const headers = options.headers || {};
    return { ...this.default_headers(), ...this.headers, ...headers };
  }

  default_headers() {
    const headers = {};
    headers["Authorization"] = `Bearer ${this.token}`;
    return headers;
  }

  url_for(path, options = {}) {
    const url = this.url;
    const path_info = `${this.path}/${path}`.replace(/[/]{2,}/, "/");
    const query = options.query || options;
    return urlcat(url, path_info, query);
  }

  img_url_for(path, options = {}) {
    const url = this.url;
    const path_info = path;
    const query = options.query || options;
    return urlcat(url, path_info, query);
  }
}

const api = new API();
export { api as default, API };

/*
const api = new API();
console.dir(api.url_for("/home-page", { query: { k: "v" } }));
console.dir(api.url_for("/home-page", { query: {} }));
api
  .fetch("/home-page", { populate: ["hero", "hero.image"] })
  .then((result) => {
    //console.dir(result.ok);
    //console.dir(result.errors);
    //console.dir(result.response);
    console.dir(result.json, { depth: null });
  })
  .catch();
}
*/
