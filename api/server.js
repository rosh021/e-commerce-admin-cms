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

//APIS

import registerLoginRoute from "./src/routers/register.login.js";

app.use("/api/v1/register-login", registerLoginRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello From the server" });
});

app.use((error, req, res) => {
  console.log(error);
  res.send = error.status || 400;
  req.json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running http://localhost:${PORT}`);
});
