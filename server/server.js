const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const us = require('./service/user_service');
const uc = require('./controller/user_controller')
// var us = new userService();

app.set('port', (process.env.PORT || 80));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/users', uc);

app.get('/api/users2',(req,res,next)=>{
    var po = {}
    if(req.query.user){
        po = JSON.parse(req.query.user);
    }
    console.log(po);
    us.selectUser(po)
    .then((result)=>{
        res.json(result);
    });
});
app.post('/api/users2',(req,res,next)=>{
    us.insertUser(req.body)
    .then((result)=>{
        res.json(result);
    });
});

app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});