var mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const Guestbook = new Schema({
    title: {type: String, trim: true},
    content: {type: String, trim: true},
    name: {type: String, trim: true},
    //date : {type:Date, default:Date.now}
//   date: {
//     title: {type: String, trim: true},
//     content: {type: String, trim: true},
//     name: {type: String, trim: true},
//     date : {type:Date, default:Date.now}
//   },
//   is_edited : {type:Boolean, default:false}
})
 
module.exports = mongoose.model('Guestbook',Guestbook);