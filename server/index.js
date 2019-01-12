const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// const express = require('express')
// const app = express()
// app.use(express.static('public'))
// app.listen(3000, () => console.log('Server running on port 3000'))
