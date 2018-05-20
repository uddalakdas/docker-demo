var express = require('express');
var app = express();


var testEnv = process.env["test-env"];
const execSync = require('child_process').execSync;

app.get('/api', function (req, res) {
    const output = execSync('node -v');
    res.send('test-env = ' + testEnv + ', node version = ' + output);
});


app.listen(5000, function () {
    console.log('App listening on port 5000');
});