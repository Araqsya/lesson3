var obj={
    "first name":"Araqsya",
    "last name":"Nikoghosyan",
    "age":15,
    "tumo_student":true
}
var myjson = JSON.stringify(obj);
var fs = require('fs');

function main(){
   var file  = "obj.json";
   fs.appendFileSync(file, myjson);
}
main();