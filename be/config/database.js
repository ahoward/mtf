const path = require("path");
const fs = require("fs");

const envPath = (env, envKey, defaultPath) => {
  let envPath = env(envKey, defaultPath);
  if (envPath && !envPath.startsWith("/")) {
    envPath = path.join(__dirname, "..", envPath);
  }
  try {
    envPath && fs.statSync(envPath);
  } catch (e) {
    throw `${envKey}=${envPath} ### bad value`;
  }
  return envPath;
};

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: envPath(env, "DATABASE_FILENAME", ".tmp/data.db"),
    },
    useNullAsDefault: true,
  },
});
