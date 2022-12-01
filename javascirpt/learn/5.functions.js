let a=[];
for(let i=0;i<20;i++){
    a[i]=i;
}
for(let i=0;i<20;i=i+2){
    avg(a[i],a[i+1]);
}
function avg(a,b){
    console.log("the avg of",a,",",b,"is",(a+b)/2);
    console.log("done");
}
//returning function
function reavg(a,b){
    console.log("done");
    return (1+(a+b)/2);
}
//other formate for function
const sum=(a,b)=>{
    return a+b;
}
console.log("sum =",sum(10,12));
//note that the we can use the function after defined it in above the use
