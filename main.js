const express = require("express");
const { router } = require("./api");

app = express();

app.use(express.json());

app.use(router);

app.listen(3000, (error)=> {
    if (error){
        console.log(error);
        exit(0);
    }

    else{
        console.log("Server started at port: 3000");
    }
});