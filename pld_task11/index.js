const aside =  document.querySelector("#offcanvas")
const burgerBtn = document.querySelector(".button--burger")
const closeBtn = document.querySelector(".offcanvas--close")
burgerBtn.addEventListener("click",()=>{
    aside.classList.toggle("active")
    
})

closeBtn.addEventListener("click",()=>{
    aside.classList.remove("active")
    
})


