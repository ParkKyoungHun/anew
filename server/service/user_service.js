const db = require('../dao/db_util.js');
var dbm = new db();

module.exports=function(){
    this.selectUser = function(req,res,po){
        return dbm.runSql("SELECT_USER",po);
    }
    this.insertUser = function(req,res,po){
        return this.selectUser(req,res,{"userId":po.userId})
        .then((result)=>{
            if(result.list.length!=0){
                return dbm.promiseException({"code" : 100,
                "errno" : 01,
                "sqlMessage" : '유저아이디 : \'' + po.userId + '\'는 이미 존재하는 아이디 입니다.'
                });
            }
            return dbm.runSql("INSERT_USER",po);
        });
    }
}