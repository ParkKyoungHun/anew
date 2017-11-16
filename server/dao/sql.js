module.exports = {
    "SELECT_USER" : 
    'select userNo, userName, userId, userPwd, complete from user_info where  1'+
    ' and #userId=userId#'+
    ' and #userName=userPwd#'+
    ' and #userNo=userNo#'+
    ' and #complete=complete#',
};