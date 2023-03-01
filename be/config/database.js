const path = require("path");
const fs = require("fs");

const envPath = (env, envKey, defaultPath) => {
  let envPath = env(envKey, defaultPath);
  if (envPath && !envPath.startsWith("/")) {
    envPath = path.join(__dirname, "..", envPath);
  }
  try {
    envPath && fs.existsSync(envPath);
  } catch (e) {
    console.error(e.message);
    //throw new Error(`${envKey}=${envPath} ### bad value`);
    console.error(`${envKey}=${envPath} ### bad value`);
  }
  return envPath;
};

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: envPath(
        env,
        "DATABASE_FILENAME",
        NODE_ENV === "production"
          ? "/data/strapi/production/sqlite.db"
          : ".tmp/data.db"
      ),
    },
    useNullAsDefault: true,
  },
});
