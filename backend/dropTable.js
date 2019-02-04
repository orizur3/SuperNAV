const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/superNav",function(){
	mongoose.connection.db.dropDatabase();
	console.log('collection dropped');
});