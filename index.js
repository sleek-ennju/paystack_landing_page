let hamburger = document.getElementById("hamburger");
let navGroup = document.getElementById("navGroup");	

hamburger.addEventListener("click", function(){
    
    if(navGroup.style.visibility == "visible"){
        navGroup.style.visibility = "hidden";
        navGroup.style.opacity = 0;
        
    }else{
        navGroup.style.visibility = "visible";
        navGroup.style.opacity = 1;
    }
});
