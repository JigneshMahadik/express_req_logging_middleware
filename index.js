const express = require("express");
const app = express();
const fs = require("node:fs");



// Capture and log request method, URL, IP address, and timestamps.
const requestLogger = (req, res, next)=>{
    fs.appendFileSync("access.log",
    `Reqest has triggered at URL : "${req.url}"\t 
    Timestamp : "${new Date()}"\t
    Method : "${req.method}"\t
    IP_Address : "${req.ip} (This ip is expected because as we are using local server and not yet deploy on any server and not yet used remote ip addess)"\n`);
    // console.log(req.method);
    // console.log(req.url);
    next();
}

app.use(requestLogger);

// const checkMiddleware = (req,res, next)=>{
//     console.log("Sorry !");
// }

app.get("/api/v1/product" ,(req,res)=>{
    try {
        console.log(`Request is being processed at URL "${req.url}"`);
    } 
    catch(error){
        console.log("Error occured while API call !");
        // next();
    }
});


// // Error handling middleware for mismatch API request.
// const errorMiddleware = (err, req, res, next)=>{
//     console.log("Sorry");
// }

app.listen(8082, ()=>{
    console.log("Server is up and running on port : 8082");
});