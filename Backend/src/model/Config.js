const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
mongoose.connect('mongodb://localhost:27017/AlumniDb', {useNewUrlParser: true}, { useUnifiedTopology: true });

const Schema = mongoose.Schema;//To Access the schema from Mongoose package

const LoginSchema = new Schema({
    userid  : String,
    username : String,
    lastname:String,
    user_email : String,
    password : String,
    phone_number : String,
    skills:{type: String,default: "",required: false},
    dateofjoining:{type: String,default: "01/01/2010",required: false},
    coursehandling:{type: String,default: "",required: false},
    role : {type: Number,default: 0,required: true} ,
    status:{type: String,default: "Unapproved",required: true},
    Role : {type: String,default: "Faculty",required: true}
   
    
    

});//structure saved to db
//Model Creation----->Each Model is instance of Document
var Userdata = mongoose.model('User',LoginSchema);
module.exports = Userdata;