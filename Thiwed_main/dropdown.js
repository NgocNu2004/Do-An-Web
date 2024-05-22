var btnIcon = document.querySelector(".icon");
var dropDownMenu = document.querySelector(".menu_dropdown");
var isClicked = false;

btnIcon.onclick = ()=>{
   if(!isClicked){
       dropDownMenu.style.display = "flex";
       btnIcon.innerHTML = "<i class='bx bx-x' ></i>";
       isClicked = true;
   }else{
       dropDownMenu.style.display = "none";
       btnIcon.innerHTML =  "<i class='bx bx-menu'></i>";
       isClicked = false;
   }
}