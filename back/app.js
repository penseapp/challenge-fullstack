const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

const CONNECTION_URL =
  "mongodb+srv://mongo:mongo@cluster0.z8kvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
  CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`MongoDB CONNECTED on port ${PORT}`);
    }
  }
);

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, function () {
  console.log(`server runing on port ${PORT}`);
});
