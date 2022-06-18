import express from "express";

const route = express.Router();

route.all("/", (req, res, next)=>{

    console.log("All the request of the spi will go throug")
})

route.post("/", (req, res) => {
  console.log(req.body);

  res.json({
    message: "todo",
  });
});

export default route;
