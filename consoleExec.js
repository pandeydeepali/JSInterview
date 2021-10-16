// A number representing the time interval in milliseconds (1000 milliseconds equals 1 second) to wait before executing the code. If you specify a value of 0 (or omit the value), the function will run as soon as possible.7 days ago

//Q1.
console.log('a')
let timey=setTimeout(()=>{
console.log('b')
}, 10)
let timothy=setTimeout(()=>{
console.log('c')
},1)
let timer=setTimeout(()=>{
    console.log('d')
}, 0)
console.log('e')
//Answer: a,e,c,d,b


//Q2:
let num=0
async function increment(){
    num+= await 2;
    console.log(num);
}
increment();
num+=1;
console.log(num)

//answer: 1,2







