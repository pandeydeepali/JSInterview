const expensiveFunction = (...args)=>{
    console.log('expensive')
}

const throttle = (func, delay) =>{
    let flag=true;
    return function(){
        let context=this, args=arguments;
       if(flag){
        func.apply(context, args)
        flag=false;
        setTimeout(() => {
            flag=true;
        }, delay);

       }
  }
}
const betterExpensiveFunc = throttle(expensiveFunction, 3000);