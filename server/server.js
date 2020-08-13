const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const route = require('./routes/index');

// app.use(cors());

app.use(bodyParser.json());
app.use('/api', route); // app.use('/api', (req, res)=> res.json({username:'Conative'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost/save_userdata'); //db이름이구나!