import chalk from "chalk";
const util = require("util");

class Logger {
  static LEVELS = {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3,
  };

  static COLORS = {
    ERROR: "red",
    WARN: "yellow",
    INFO: "blue",
    DEBUG: "magenta",
  };

  static defaultLevel() {
    if (process.env.NODE_ENV == "production") {
      return this.LEVELS.WARN;
    } else {
      return this.LEVELS.DEBUG;
    }
  }

  static levelFor(level) {
    if (typeof level == "string") {
      level = this.LEVELS[level.toUpperCase()];
    } else {
      level = level ? parseInt(String(level), 10) : undefined;
    }

    level = level || this.defaultLevel();

    level = Math.min(Math.max(level, this.LEVELS.ERROR), this.LEVELS.DEBUG);

    return level;
  }

  static labelFor(level) {
    const lvl = this.levelFor(level);

    for (const key in this.LEVELS) {
      const val = this.LEVELS[key];

      if (val == lvl) {
        const color = this.COLORS[key];
        const ts = new Date().toISOString();
        return chalk[color](`[${chalk.bold(key)} @ ${ts}]`);
      }
    }

    throw new Error(level);
  }

  constructor(level) {
    this.level = Logger.levelFor(level || this.defaultLevel());
  }

  defaultLevel() {
    process.env.LOG_LEVEL || Logger.defaultLevel();
  }

  inspect(arg) {
    return util.inspect(arg, { depth: Infinity });
  }

  ts() {
    return new Date().toISOString();
  }

  log(level, ...args) {
    //const label = `[${String(level).toUpperCase()}] (${this.ts()})`;
    const label = Logger.labelFor(level);

    const messages = [];
    args.forEach((arg) => {
      messages.push(typeof arg == "string" ? arg : this.inspect(arg));
    });
    const message = messages.join(" ") + "\n\n";

    try {
      console.log(`${label} ${message}`);
    } catch (e) {
      try {
        console.error(e);
      } catch (_e) {}
    }
  }

  static generateLoggingMethods() {
    for (const level in this.LEVELS) {
      const lvl = level.toLowerCase();
      Logger.prototype[lvl] = function (...args) {
        if (this.level < Logger.LEVELS[level]) return undefined;
        return this.log(lvl, ...args);
      };
    }
  }
}

Logger.generateLoggingMethods();
const logger = new Logger();
export { logger as default, Logger };

if (false) {
  logger.debug("debug 42");
  logger.info("info 42");
  logger.warn("warn 42");
  logger.error("error 42");

  logger.info("plain ol info");
  logger.info({ k: 42 });

  try {
    throw new Error("42");
  } catch (e) {
    logger.error(e);
  }
}
