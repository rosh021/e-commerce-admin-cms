import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

// Database Connection
import { createConnection } from "./src/config/dbConfig.js";
createConnection();

//APIS

import registerLoginRoute from "./src/routers/register.login.js";

app.use("/api/v1/register-login", registerLoginRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello From the server" });
});

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running http://localhost:${PORT}`);
});
