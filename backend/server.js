const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}


app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server started:-${PORT}!`);
  });
});
