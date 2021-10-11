/**
 * Events Captured
 * Events Bubbbled
 * Events Triccale
 * Events Delegation
 */



document.querySelector("#grandparent").addEventListener('click', (e)=>{
     console.log("1==>Gransparent click")
}, true)

document.querySelector("#parent").addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("2==>parent click")
   
  }, false)

document.querySelector("#child").addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("3==>child click")
  
  }, false)