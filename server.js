var mongo = require('mongodb').MongoClient;
var app = require('express')();
var cors = require('cors');
var url = "mongodb://jorisboschmans:ITrules4565@ds029635.mlab.com:29635/jorisboschmans-mydb";
var col = "pixelserver";

/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://findateacher.atwebpages.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/

app.use(cors());


app.get('/', function(req, res){
    res.send({
        'response' : 'true'
    });
});


app.post('/save', function(req, res){
    var dataLine = req.body.dataline;
    res.send({
        'response' : 'true'
    });
    /*mongo.connect(url, function (err, db){
        if (err) throw err;
        db.collection(col).deleteMany({}, function (err, result){
            if (err) throw err;
            db.collection(col).insertOne({
                "dataLine" : dataLine
            }, function(err, result){
                if (err) throw err;
                res.send({
                    'response' : 'true'
                });
            });
        });
    });*/
});




app.listen(process.env.PORT || 3000, function(){
    console.log("Listening....");
});