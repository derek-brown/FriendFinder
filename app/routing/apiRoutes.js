// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {

    var scores = req.body.scores;

    var totalScore = 0;
    var friendScore = 0;
    var totalDiff = 1000;
    matchName = "";
    matchImg = "";

for(var i=0; i<friendsData.length; i++){

  var diff = 0;

  for(var j=0; j<scores.length; j++){

      diff += Math.abs(parseInt(friendsData[i].scores[j] - scores[j]));
    }

    if(diff < totalDiff){
      totalDiff = diff;

      if(friendsData[i].name && friendsData[i].photo){
        matchName = friendsData[i].name;
        matchImg = friendsData[i].photo;
      }
    }
}

console.log(matchImg);
console.log(matchName);

    friendsData.push(req.body);
      res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
  });
};
