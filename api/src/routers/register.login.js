import express from "express";
import { hashPassword } from "../helper/bcrypt.js";
import { adminRegisterValidation } from "../middlewares/validationMiddleware.js";
import { createNewAdmin } from "../models/adminUser/AdminUser.model.js";

const route = express.Router();

// route.all("/", (req, res, next)=>{

//     console.log("All the request of the spi will go throug")
// })

route.post("/", adminRegisterValidation, async (req, res, next) => {
  try {
    // 1. encrypt password

    req.body.password = hashPassword(req.body.password);

    //2. call model to run save query

    const result = await createNewAdmin(req.body);

    //3. Unique url endpoint and sent that to customer

    

    res.json({
      status: "success",
      message:
        "We have sent you an email check your inbox and verify your email address",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already register user with this email, Please register with different email";
    }
    next(error);
  }

  //3. unique url endpoint and sent that to customer
});

export default route;
