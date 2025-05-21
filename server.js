import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import weatherRouter from "./router/weather.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Simple Weather App Backend");
});

app.use("/weather", weatherRouter); // ⬅️ fixed route path

app.use((err, req, res, next) => {
  console.error("Error:", err.message || err);
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong on the server.",
  });
});

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
