let burger = document.querySelector(".fa-bars");
let xMarc = document.querySelector(".fa-xmark");
let MobileMenu = document.querySelector(".menu");

burger.addEventListener("click", ()=> {
    MobileMenu.classList.add("show");
    burger.style.display = "none";
    xMarc.style.display = "block";

})
 
xMarc.addEventListener("click", ()=>{
    MobileMenu.classList.remove("show");
    burger.style.display = "block";
    xMarc.style.display = "none";
})