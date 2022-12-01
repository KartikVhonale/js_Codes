const prompt = require("prompt-sync")({sigint:true});
let n= prompt("enter the number as n :");
n=Number.parseInt(n);
let i=0;
while(i<n){
    console.log(i);
    i++;
}
console.log("------------------------");
//do while loop man
i=0;
do{
    i++;
    console.log(i);
}while(i<n);