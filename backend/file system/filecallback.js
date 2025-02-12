const { error } = require("console");

const read=()=>{
    const fs = require("fs");
    fs.readFile("./data.txt","utf-8",(error,data)=>{
        if (error){
            console.log("Error resding files:",error);
        }
        else{
            console.log("Data form file",data);
        }
    });
}
module.exports=read;