var mongoose = require('mongoose');

var uri = 'mongodb://HectorLobo:.Nomejodaspendejo10@cluster0-shard-00-00-pxpbj.mongodb.net:27017,cluster0-shard-00-01-pxpbj.mongodb.net:27017,cluster0-shard-00-02-pxpbj.mongodb.net:27017/EscribeloCorrectoDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
var options = {
    useMongoClient: true
};

mongoose.connect(uri, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected');
});
