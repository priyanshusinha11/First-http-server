const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
// function middleware1(req, res, next) {
//     console.log("this is from inside middleware " + req.headers.counter);
//     next();
// }
// app.use(middleware1);
app.use(bodyParser.json())
function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i < counter; i++) {
        sum += i;
    }
    return sum;
}
function handleFirstRequest(req, res) {
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    var answerObject = {
        sum: calculatedSum,
    }
    res.send(answerObject);
}
function createUser(req, res) {
    res.send("hello world");
}
function givePage(req, res) {
    //     res.send(`<!DOCTYPE html>
    // <html>
    //   <head>
    //     <title>Hi from page</title>
    //   </head>
    //   <body>
    //     <b>Hey there!</b>
    //   </body>
    // </html>
    // `)
    res.sendFile(__dirname + "/index.html");
}
app.get('/', givePage)
app.get('/handlesum', handleFirstRequest)
function started() {
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started)
var calculatedSum = calculateSum(100);
console.log(calculatedSum);