const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conn =mongoose.Collection;
var teacherSchema =new mongoose.Schema({
	email: String,
	password:String
});

var teacherModel = mongoose.model('signupdata', teacherSchema);
module.exports=teacherModel;
