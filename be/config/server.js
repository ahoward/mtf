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
  console.log(`${envKey}=${envPath}`);
  return envPath;
};

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  dirs: {
    public: envPath(
      env,
      "PUBLIC_DIRECTORY",
      NODE_ENV === "production" ? "/data/strapi/production/public" : "./public"
    ),
  },
});
