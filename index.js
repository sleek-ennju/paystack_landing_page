let hamburger = document.getElementById("hamburger");
let navGroup = document.getElementById("navGroup");	
let firstLink = document.getElementById("firstLink");
let subContainer = document.getElementById("sub-1");
let backIcon = document.getElementById("backIcon");

// mobile nav view functionality
hamburger.addEventListener("click", function(){
    
    if(navGroup.style.visibility == "visible"){
        navGroup.style.visibility = "hidden";
        navGroup.style.opacity = 0;
        
    }else{
        navGroup.style.visibility = "visible";
        navGroup.style.opacity = 1;
    }
});

// /subcontainer functionality
firstLink.addEventListener("click", ()=>{
    navGroup.style.left = "-100%";
    subContainer.style.left = "0";
});
backIcon.addEventListener("click", ()=>{
    subContainer.style.left = "100%";
    navGroup.style.left = "0";
});
