const arr=[10,20,30,40]
for(var i=0; i<arr.length; i++){
    // console.log(i)
    setTimeout(()=>{
        console.log(`index i is ${i} and element is ${arr[i]}`)
    }, 3000)
    console.log(i)
}

const arr1 = [10, 12, 15, 21];
for (var i = 0; i < arr1.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  function close(x){
    setTimeout(function() {
          console.log('The index of this number is: ' + x);
      }, 1000);
  }
  
  close(i)
}


/**
 * find factorial
 */

function factorial(num){
    if(num==0 || num==1){
        return 1;
    } else{
         return num * factorial(num-1)
    }

}

console.log(factorial(0));
