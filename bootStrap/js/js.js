var scrollFunc=function(e){
    var nav = document.querySelector(".nav");
    e=e || window.event; 
    if(e.wheelDelta){//IE/Opera/Chrome 
        if(e.wheelDelta==120) 
        { 
        //向上滚动事件 
            nav.style.display = "block";

        }else
        { 
        //向下滚动事件 
            nav.style.display = "none";
        } 
    }else if(e.detail){ 
        //Firefox 
        if(e.detail==-3) { 
        //向上滚动事件<br> 
            nav.style.display = "block";
        }else { 
        //向下滚动事件<br> 
            nav.style.display = "none";
        } 
    } 
}; 
if(document.addEventListener){ 
//adding the event listerner for Mozilla 
document.addEventListener("DOMMouseScroll" ,scrollFunc, false); 
} 
window.onload=function(){

}
			
