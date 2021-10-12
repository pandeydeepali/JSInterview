var c=0;
function startProgress(){
    if(c==0){
     var elem=document.querySelector('.my-bar');
     var width=1;
     var id=setInterval(frame, 10);
 
     function frame(){
      if(width>=100){
          clearInterval(id)
          i=0;
      } else{
          width++;
          elem.style.width=width+'%';
      }

     } 

    }
 }