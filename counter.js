let val=document.getElementById("val");
window.onload=ho();
function ho(){
    
    val.textContent=sessionStorage.clickcount;

}
let dec=document.getElementById("decrease");
window.addEventListener('keydown',function(event){
    if(event.which==40){
        dec.click();
        
    }
});
dec.onclick=()=>{
   
    sessionStorage.clickcount-=1;
    val.textContent=sessionStorage.clickcount;
    ho();
    
   

}
let reset=document.getElementById("reset");
reset.onclick=()=>{
   
    sessionStorage.clickcount=0;
   
    val.innerHTML=sessionStorage.clickcount;
    ho();
   
   

}
window.addEventListener('keydown',(event)=>{
    if(event.code=="Enter"){
        reset.click();
     
    }
});

let inc=document.getElementById("increase");
window.addEventListener('keydown',function(event){
    if(event.which==38){
        inc.click();
       
    }
});
inc.onclick=()=>{
  
    sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    val.textContent=sessionStorage.clickcount;
    ho();

}


