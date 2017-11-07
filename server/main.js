var express = require('express');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var dbConfig   = require('./conf/dbconfig.js');
const mysql = require('mysql');
var connection = mysql.createConnection(dbConfig);

app.set('port', (process.env.PORT || 80));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
var printObj = function(obj){
    console.log(typeof(obj));
    console.log(obj.length);
    for(var i=0,max=obj.length;i<max;i++){
        console.log(obj[i]);
    }
}
var printRequest = function(req){
    printObj(req.param);
    printObj(req.params);
    printObj(req.query);
    printObj(req.body);
}

app.get('/api/users/:userId,:testId',function(req, res, next){
    console.log("11111");
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 ';
    var userId = req.params.userId;
    var values = [];
    if(userId){
        sql += ' and userId=?';
        values[values.length] = userId;
    }
    connection.query(sql, values, function(err, rows) {
        if(err) throw err;
        console.log('The solution is: ', rows);
        res.json(rows);
    });
});
app.use(function (req, res, next) {
    var url = req.path;
    if(url==="/api/users"){
        printRequest(req)
        connection.query('SELECT userNo, userName, userId, userPwd,complete from user_info', function(err, rows) {
            if(err) throw err;
            console.log('The solution is: ', rows);
            res.json(rows);
          });
    }else {
        // redirect all html requests to `index.html`
        res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
    }
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});