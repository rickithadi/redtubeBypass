
var request = require('request');

var appRouter = function (app) {


  app.post("/puki", function (req, res) {
    const base = "https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search="
    const vids = {}
    console.log(req.body.body)
    let redtube = base + req.body.body
      console.log(redtube); 

    request(redtube, { json: true }, function (err, response, body) {
      if (err) { return console.log(err); }
      //console.log(body.videos);
      // console.log(body); 
      res.json(body.videos)
      // A chunk of data has been recieved.
    })
  })
}
module.exports = appRouter;

