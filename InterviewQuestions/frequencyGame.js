/**
 * 
 *  largest element with minimum frequency.
 */
function LargestNumberwithMinFreq(arr){
    let x, freq={};
    for(x of arr){
        if(freq[x]){
            freq[x]++;
        } else{
            freq[x]=1;
        } 
    }
   let maxKey=Math.max(...Object.keys(freq))
   let minValue=Math.min(...Object.values(freq))
   for(let key in freq){
        if(key==maxKey && minValue){
            return maxKey;
        }
    }
}

let element = LargestNumberwithMinFreq([2, 2, 5, 50, 1])
 if(element){
     document.write("Found Max Element", element);
 } else{
    document.write("No Element Found");
 }