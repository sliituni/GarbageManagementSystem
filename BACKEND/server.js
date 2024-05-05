const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// Set the port for the server to listen on, using the environment variable or a default value
const PORT = process.env.PORT || 4011;

app.use(cors());
app.use(bodyParser.json());

// Retrieve MongoDB connection URL from environment variables
const URL = process.env.MONGODB_URL;

// Connect to MongoDB using Mongoose
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});
connection.once("open", () => {
  console.log("MongoDB Connection success!");
});


//Garbage Request Router
const garbageRequestRouter = require("./routes/garbageRequest.js");
app.use("/garbageRequest",garbageRequestRouter)

const userRouter = require("./routes/user.js");
app.use("/user", userRouter);


//thimalka
const analiticsRouter = require("./routes/analitics.js");
app.use("/analitics",analiticsRouter);

const communityswapRouter = require("./routes/Communityswap.js");
app.use("/cs", communityswapRouter);

const tableRouter = require("./routes/table.js");
app.use("/table", tableRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on the port number: ${PORT}`);
  });
