console.log('currying')
/**
 * two ways : 1).Bind Method 2).Closures
 */

let multiply=function(x,y){
    console.log(x*3)
    
}
// let multiplyTwo=function(y){
//    let x=2;
// }

let multiplyTwo=multiply.bind(this, 2); 
multiplyTwo();


let multiplyClosure=function(x){
  return function(y){
      
     console.log(x*y)
  }
}


multiplyClosure(3)(2)


//sum(1)(2)(3)(4)..(n)() | Amazon UI/Frontend Javascript Interview Question
// const sum =function(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }

//console.log(sum(1)(3)(4))  
//Now console.log(sum(1)(3)(4)---(n))
const sum = function(a) {
	return function(b) {
		if (b) {
			return sum(a + b);
		} else {
			return a;
		}
	}
}
console.log(sum(1)(3)()) 

const sum1 = a => b => b ? sum1(a + b) : a;

console.log(sum1(2)(3)())



