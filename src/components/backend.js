const express = require("express");
const app = express();
var fs = require('fs');
function call(){
var SLACK_TOKEN = your_slack_token
var SLACK_CHANNEL = "general";
var filepath = your_file;

var options = { method: 'POST',
url: 'https://slack.com/api/files.upload',
headers:
{ 'cache-control': 'no-cache','content-type': 'application/x-www-form-urlencoded' },
formData:
{ token: SLACK_TOKEN,
channels: SLACK_CHANNEL,
file: fs.createReadStream(filepath)
} };

request(options, function (error, response, body) {
if (error) throw new Error(error);

console.log(body);
});
}
call();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));