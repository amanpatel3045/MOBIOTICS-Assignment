const cors = require("cors");
const express = require("express");
const connectDatabase = require("./config/dbconnect");
const { sendEmail } = require("./Middlewares/sendEmail");
const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config({ path: "./config.env" });
const userRoute = require("./Route/user.route")
app.use("/api/user",userRoute)
connectDatabase()

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
