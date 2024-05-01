let hamburger = document.getElementById("hamburger");
let navGroup = document.getElementById("navGroup");	
let navLinks = document.querySelectorAll("[data-navlink]");
let subContainer1 = document.getElementById("sub-1");
let subContainer2 = document.getElementById("sub-2");
let subContainer3 = document.getElementById("sub-3");
let subContainer4 = document.getElementById("sub-4");
let subBackIcons = document.querySelectorAll("[data-subicon]");

// subcontainers for desktop
let subContainer_desktop1 = document.getElementById("sub-3_desktop1");



// mobile nav view functionality
hamburger.addEventListener("click", ()=>{
    
    if(navGroup.style.visibility == "visible"){
        navGroup.style.visibility = "hidden";
        navGroup.style.opacity = 0;
        
    }else{
        navGroup.style.visibility = "visible";
        navGroup.style.opacity = 1;
    }
});

navLinks.forEach(link => {
    // /subcontainer functionality
    link.addEventListener("click", ()=>{
        //main nav container should move to the left
        navGroup.style.left = "-100%"; 
        // while the sub containers takes it's position
        if(link.dataset.navlink == "1"){
            subContainer1.style.left = "0";
        }else if(link.dataset.navlink == "2"){
            subContainer2.style.left = "0";
        }else if(link.dataset.navlink == "3"){
            subContainer3.style.left = "0";
        }else if(link.dataset.navlink == "4"){
            subContainer4.style.left = "0";
        }
    });
    
    // listening for a mouseover event
    link.addEventListener("mouseover", ()=>{
        subContainer_desktop1.classList.add("subdesktop_helper");
    });
    link.addEventListener("mouseout", ()=>{
        subContainer_desktop1.classList.remove("subdesktop_helper");
    });
    
});

subBackIcons.forEach( backIcon => {
    backIcon.addEventListener("click", ()=>{
        if(backIcon.dataset.subicon == "sub-1"){
            subContainer1.style.left = "100%";
        }else if(backIcon.dataset.subicon == "sub-2"){
            subContainer2.style.left = "100%";
        }else if(backIcon.dataset.subicon == "sub-3"){
            subContainer3.style.left = "100%";
        }else if(backIcon.dataset.subicon == "sub-4"){
            subContainer4.style.left = "100%";
        }
        navGroup.style.left = "0";
    });
});




