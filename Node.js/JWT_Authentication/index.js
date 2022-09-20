const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4200'],
  })
);

const routes = require('./routes/routes');
app.use('/api', routes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
