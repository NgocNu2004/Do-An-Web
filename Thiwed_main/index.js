var slide=document.querySelector(".slide");
var listImages=document.querySelectorAll(".hinh2");
var btnleft=document.querySelector(".btn-left");
var btnright=document.querySelector(".btn-right");
var index=0;
var widthOfImage = listImages[0].offsetWidth;

var handlechangeslide=()=>{
    if(index>=listImages.length) index=0;
    slide.style.transform=`translateX(${widthOfImage*-1*index++}px)`;
}



btnright.addEventListener('click',()=>{
    if(index==listImages.length-1) index=-1;
    slide.style.transform=`translateX(${widthOfImage*-1*++index}px)`;
})
btnleft.addEventListener('click',()=>{
    if(index==0) index=listImages.length;
    slide.style.transform=`translateX(${widthOfImage*-1*--index}px)`;
})
//ok

