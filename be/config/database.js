const path = require('path');
const fs = require('fs');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: fs.existsSync(env('DATABASE_FILENAME')) ? env('DATABASE_FILENAME') : path.join(__dirname, '..', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
});
