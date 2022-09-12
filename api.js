const express = require("express");
let router = express.Router();

router.get("/", (request, response) => {
    response.send({ first_name: "Zachary", last_name: "Tan" });
  }); // GET

//a sum API that takes input from the request and returns the sum as response.
router.get("/sum", (request, response)=>{
    let n1 = parseFloat(request.query.number1);
    let n2 = parseFloat(request.query.number2);
    let sum = n1 + n2;
    response.send(`Sum: ${sum}`);
})

router.post("/multiply", (request, response) => {
    let n1 = parseFloat(request.body.number1);
    let n2 = parseFloat(request.body.number2);
    let product = n1 * n2;
    response.send(`Product: ${product}`);
  });

module.exports = { router };