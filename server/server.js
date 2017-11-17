const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const userService = require('./service/user_service.js')
var us = new userService();


app.set('port', (process.env.PORT || 80));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get('/api/users',(req,res,next)=>{
    var po = JSON.parse(req.query.user);
    console.log(po);
    us.selectUser(req,res,po)
    .then((result)=>{
        res.json(result);
    });
});
app.post('/api/users',(req,res,next)=>{
    us.insertUser(req,res,req.body)
    .then((result)=>{
        res.json(result);
    });
    // .then((result)=>{
    //     res.json(result);
    // });
});

app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});