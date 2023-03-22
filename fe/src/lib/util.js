import path from "path";

const traverse = require("traverse");
const urlcat = require("urlcat").default;

import Emoji from "@/lib/emoji";
import Config from "@/lib/config";
import { Logger } from "@/lib/logger";

class Util {
  // url helpers
  fe_url(...args) {
    if (args.length == 0) {
      return Config.env.NEXT_PUBLIC_FE_URL;
    } else {
      return this.fe_url_for(...args);
    }
  }

  fe_url_for(path, options = {}) {
    const url = this.fe_url();
    const path_info = `${path}`.replace(/[/]{2,}/, "/");
    const query = options.query || options;
    return urlcat(url, path_info, query);
  }

  be_url(...args) {
    if (args.length == 0) {
      return Config.env.NEXT_PUBLIC_BE_URL;
    } else {
      return this.be_url_for(...args);
    }
  }

  be_url_for(path, options = {}) {
    const url = this.be_url();
    const path_info = `${path}`.replace(/[/]{2,}/, "/");
    const query = options.query || options;
    return urlcat(url, path_info, query);
  }

  insecure_url(...args) {
    if (args.length == 0) {
      return "http://static.mtf-trek.com";
    } else {
      return this.insecure_url_for(...args);
    }
  }

  insecure_url_for(path, options = {}) {
    const url = this.insecure_url();
    const path_info = `${path}`.replace(/[/]{2,}/, "/");
    const query = options.query || options;
    return urlcat(url, path_info, query);
  }

  // og helper
  async generateMetadata(options = {}) {
    const title = options.title || "MATANUSKA FRÖNTIER TREK";

    const description =
      options.description ||
      `High around the Valley :: ${Emoji.list.join("+")}\n@ Palmer, Alaska`;

    const images = [
      {
        url: util.insecure_url_for(options.image || "/og/olive-and-cash.png"),
        width: 1200,
        height: 630,
      },
    ];

    const openGraph = { title, description, images };

    const robots = { index: true };

    const metadata = { title, openGraph, robots };

    return metadata;
  }

  be_url_for(path, options = {}) {
    const url = this.be_url();
    const path_info = `${path}`.replace(/[/]{2,}/, "/");
    const query = options.query || options;
    return urlcat(url, path_info, query);
  }

  // logging
  log(level, ...args) {
    const logger = new Logger(level);
    logger.log(logger.level, ...args);
  }

  // where are we... ?
  isServer(callback) {
    if (typeof window === "undefined") {
      return callback ? callback() : true;
    }
    return false;
  }

  isClient(callback) {
    if (!this.isServer()) {
      return callback ? callback() : true;
    }
    return false;
  }

  // actuall dir shit
  //
  dir(obj, options = {}) {
    const opts = this.copy(options);
    opts["depth"] = null;
    console.dir(obj, opts);
  }

  // simple obj deep copy
  //
  copy(obj) {
    const json = JSON.stringify(obj);
    const copy = JSON.parse(json);
    return copy;
  }

  // obj deep set/get utils
  //
  paths_and_values(obj, callback) {
    const accumulator = [];

    traverse(obj).reduce(function (acc, value) {
      if (this.isLeaf) {
        const pair = [this.path, value];

        if (callback) {
          callback(this.path, value);
        } else {
          acc.push(pair);
        }
      }

      return acc;
    }, accumulator);

    return callback ? obj : accumulator;
  }

  keys_and_values(obj, callback) {
    const accumulator = [];

    this.paths_and_values(obj, (path, value) => {
      const key = path.join(".");

      if (callback) {
        callback(key, value);
      } else {
        const pair = [key, value];
        accumulator.push(pair);
      }
    });

    return callback ? obj : accumulator;
  }

  has(obj, key_or_path) {
    const path = this.path_for(key_or_path);
    return traverse(obj).has(path) ? path : false;
  }

  get(obj, key_or_path, ...args) {
    const path = this.has(obj, key_or_path);
    const fallbackGiven = args.length > 0;
    const fallback = fallbackGiven ? undefined : args[0];

    if (!path) {
      if (fallbackGiven) {
        return fallback;
      } else {
        throw new Error(`missing key ${JSON.stringify(key_or_path)}`);
      }
    }

    return traverse(obj).get(path);
  }

  set(obj, key_or_path, value) {
    const path = this.has(obj, key_or_path);

    if (!path) {
      throw `missing key ${JSON.stringify(key_or_path)}`;
    }

    return traverse(obj).set(path, value);
  }

  path_for(key_or_path) {
    let path = key_or_path;

    if (typeof key_or_path === "string") {
      path = key_or_path.split(".");
    }

    return path;
  }

  strip(value) {
    return String(value).trim().toLowerCase();
  }
}

const util = new Util();
export { util as default, Util };
