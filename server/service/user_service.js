const db = require('../dao/db_util.js');
var dbm = new db();

module.exports=function(){
    this.selectUser = (req,res,next)=>{
        console.log('test');
        return dbm.runSql("SELECT_USER",req.body);
    }
}