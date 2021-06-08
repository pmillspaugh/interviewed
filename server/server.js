const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/public')));

// TODO: set up conditional for NODE_ENV

// TODO: 404 handler
app.get('*', (req, res) => {});

// TODO: global error handler for Express middleware

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
