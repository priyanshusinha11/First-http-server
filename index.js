
const express = require('express')
const app = express()
const port = 3000

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
    console.log(calculatedSum);
    var answer = "The answer is: " + calculatedSum;
    res.send(answer)
}
function createUser(req, res) {
    res.send("hello world");
}

app.get('/handlesum', handleFirstRequest)
app.post('/createUser', createUser)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)



var calculatedSum = calculateSum(100);
console.log(calculatedSum);