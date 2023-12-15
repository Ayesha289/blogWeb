const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/posts", require("./routes/posts"));

const start = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => {
      console.log(`journal backend connected to ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
