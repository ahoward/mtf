const traverse = require("traverse");

class Util {
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

  get(obj, key_or_path) {
    const path = this.has(obj, key_or_path);

    if (!path) {
      throw new Error(`missing key ${JSON.stringify(key_or_path)}`);
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
}

const util = new Util();
export { util as default, Util };
