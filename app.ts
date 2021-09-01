import express from "express";
import * as jobTitle from "./src/routes/job-title";
import * as bodyParser from "body-parser";
import "./src/db/connection";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "HomePage - TypeScript Test App" });
});

app.use("/job-title", jobTitle.router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on the port ${PORT} ...`);
});
