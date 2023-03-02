class Config {
  // see .env.local
  static ENV = class ENV {
    static NEXT_PUBLIC_FE_URL = process.env.NEXT_PUBLIC_FE_URL;
    static NEXT_PUBLIC_BE_URL = process.env.NEXT_PUBLIC_BE_URL;
    static NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    static NEXT_PUBLIC_API_PATH = process.env.NEXT_PUBLIC_API_PATH || "/api";
    static NEXT_PUBLIC_API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
    static API_TOKEN = process.env.API_TOKEN;

    constructor() {
      let val;

      for (let key in ENV) {
        val = ENV[key];

        if (val) {
          this[key] = val;
        } else {
          this.isServer(() => {
            this.missing(key);
          });
        }
      }
    }

    isServer(callback) {
      if (typeof window === "undefined") {
        return callback ? callback() : true;
      }
      return false;
    }

    missing(key) {
      const message = `[Config.ENV] MISSING: process.env.${key}`;
      throw new Error(message);
    }
  };

  // REF: https://tailwindcss.com/docs/customizing-colors
  static Colors = class Colors {
    static yellow = "#fbbf24"; // TW.amber-400
    static fireweed = "#db2777"; // TW.pink-600
    static green_turquoise = "#2dd4bf"; // TW.teal-400
    static blue_turquoise = "#22d3ee"; // TW.cyan-400
    static turquoise = this.green_turquoise;

    constructor() {
      let val;

      for (let key in Colors) {
        val = Colors[key];
        this[key] = val;
      }
    }
  };

  constructor() {
    this.env = new Config.ENV();
    this.colors = new Config.Colors();
  }
}

const config = new Config();
export { config as default, Config };
