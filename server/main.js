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

var generateWhere = function(paramObj){
    var whereStr = '';
    Object.keys(paramObj).forEach((key)=>{
        whereStr += ' and ' + key + '=? ';
    });
    return whereStr;
}

var generateWhereValue = function(paramObj){
    var whereValue = [];
    Object.keys(paramObj).forEach((key)=>{
        whereValue.push(paramObj[key]);
    });
    return whereValue;
}

app.get('/api/users/:userId',function(req, res, next){
    console.log("11111");
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 ';
    var userId = req.params.userId;
    var values = [];
    if(userId){
        sql += ' and userId=?';
        values[values.length] = userId;
    }
    connection.query(sql, values, (err, rows)=> {
        if(err) throw err;
        console.log('The solution is: ', rows);
        res.json(rows);
    });
});
app.get('/api/users',(req, res, next)=>{
    var result = {};
    var paramObj = JSON.parse(req.query.user);
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 '
    sql += generateWhere(paramObj);
    var values = generateWhereValue(paramObj);

    connection.query(sql, values, (err, rows)=>{
        if(err) throw err;
        console.log(rows);
        result["list"] = rows;
        res.json(result);
    });
});

app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});