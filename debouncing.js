/**
 * debiuncing in javascript
 */

var count = 0;
function getData(){
    console.log('Fetching Data', count++)
}


const debounce = function(fn, delay){
    let timer;
    return function(){
        let args=arguments;
        clearTimeout(timer)
        timer=setTimeout(()=>{
            getData.apply(this, args)
        }, delay)
       
    }

}

const betterFunction= debounce(getData, 3000)
