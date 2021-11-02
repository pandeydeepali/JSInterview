/**
 * debiuncing in javascript, debouncing and throtling useful for optimisation for limiting the rate of calls or wherevere it is happening that the 
 * calls are calling out of the limit.sometime function are calling lot of time like on keyup of searchbox 
 * 
 * keyStroke difference if let say more than or equal to 300 ms then only function call==>debouncing
 * last function call and the next function call time differec if it 300ms  is throtling, it will ignore all mid events which was not a part of 300ms
 */

var count = 0;
function getData(){
    console.log('Fetching Data', count++)
}


const debounce = function(fn, delay){
    let timer;
    return function(){
        let args=arguments;
        console.log('debouncing===>',args)
        clearTimeout(timer)
        timer=setTimeout(()=>{
            getData.apply(this, args)
        }, delay)
       
    }

}

const betterFunction= debounce(getData, 3000)
