//Mobile navigation 
const mobileNav = document.querySelector(".mobile-responsive");
const burger = document.querySelector(".burger");
const times = document.querySelector(".times");
const mobileLink = document.querySelectorAll(".mobile-responsive a");
const mobileLength = mobileLink.length;


burger.onclick = () => {
    mobileNav.style.left = 0;
}

times.onclick = () => {
    mobileNav.style.left = "-100%";
}

//Hide navigation while clicking on the link
for(let i=0; i<mobileLength; i++){
    mobileLink[i].onclick = () =>{
        mobileNav.style.left = "-100%";
    }
} 
