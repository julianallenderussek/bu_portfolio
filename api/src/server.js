const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();  

const app = express();
const port = process.env.PORT || 4444;

app.use(bodyParser.json());
app.use(cors());

const checkHeaderMiddleware = (headerName) => {
  return (req, res, next) => {
    console.log(req.headers)
    if (req.headers[headerName] === '83568150') {
      next(); // Header exists, continue to the next middleware or route handler
    } else {
      res.status(400).json({ error: `Header '${headerName}' is missing` });
    }
  };
};

app.get('/test', checkHeaderMiddleware('authorization'), (req, res) => res.json({message: "API running"}));
app.use('/api', checkHeaderMiddleware('authorization'), apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
