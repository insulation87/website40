var express =require("express");
var server = express();

server.use(express.static(__dirname+"/AgencyProject"));

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})