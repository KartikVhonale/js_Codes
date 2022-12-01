const prompt= require('prompt-sync')({sigint:true});
let sum=0;
let n = prompt("give a number - ");
n=Number.parseInt(n);
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log("Sum of first ",n,"numbers is - ",sum);

//for in loop
let ob={
    one:1,two:2,
    three:3,four:4,
    five:5,six:6
};
for(let a in ob){
    console.log(a,"is equal to",ob[a]);
}
//for off loop
for(let b of 'ones apon a time'){
    console.log(b);
}