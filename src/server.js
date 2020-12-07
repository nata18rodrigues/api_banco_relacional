const express = require("express");
const path = require("path")
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.use("/uploads", express.static('uploads'));

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routes);

app.listen(3333, () => console.log("CORS-enabled web server listening on port 3333"));
