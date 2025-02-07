//const fs = require('fs');
//const data = fs.readFileSync("./data.txt","utf-8");
//console.log(data.toString());
//fs.appendFileSync("./data.txt","Work from another file","utf-8");


const fs = require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
if(data.match("H")){
    console.log("H is found");
    const newdata = data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}