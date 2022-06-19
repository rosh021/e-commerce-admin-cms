import express from "express";
import { adminRegisterValidation } from "../middlewares/validationMiddleware.js";

const route = express.Router();

// route.all("/", (req, res, next)=>{

//     console.log("All the request of the spi will go throug")
// })

route.post("/", adminRegisterValidation, (req, res) => {
  console.log(req.body);

  // 1. encrypt password

  
  //2. call model to run save query
  //3. unique url endpoint and sent that to customer

  res.json({
    message: "todo",
  });
});

export default route;
