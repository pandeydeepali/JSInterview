function genRandomColor(){
     return `#${Math.random().toString().substring(2,8)}`
}

console.log(genRandomColor());