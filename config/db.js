var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const config =require('config');
var db=config.get('connection_url');
const connecting = async() => {
	try{
	await mongoose.connect(db);
	console.log('DB CONNECTED')
	}
	catch(err){
		console.log("ERROR IN DB CONNECTION");
		process.exit(1);
	}
}

module.exports = connecting;

//to connect to clusuter
// username: jaswanthyenduri
// password: Test#1234 	
// "connection_url":"mongodb+srv://jaswanth:jaswanth@studentdata.ti4pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	 // "connection_url":"mongodb+srv://<username>:<password>@firstcluster.4rc4s.mongodb.net/<dbname>?retryWrites=true&w=majority"
 	// "connection_url":"mongodb+srv://jaswanthyenduri:Test@1234.ti4pr.mongodb.net/StudentDataBase?retryWrites=true&w=majority"
	