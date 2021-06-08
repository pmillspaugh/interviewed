const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
  app.use('/', express.static(path.join(__dirname, '../client/build')));
}

// TODO: 404 handler

// TODO: global error handler for Express middleware

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
