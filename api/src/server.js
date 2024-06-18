const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());


app.get('/test', (req, res) => res.json({message: "API running"}));
app.use('/api', apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
