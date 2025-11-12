const aside =  document.getElementById("offcanvas")
const burgerBtn = document.getElementById("burgerBtn")
const closeBtn = document.getElementById("closeBtn")
const overlay = document.getElementById("overlay")
burgerBtn.addEventListener("click",()=>{
    aside.classList.toggle("active")
    overlay.classList.toggle("active")
    
})
closeBtn.addEventListener("click",()=>{
    aside.classList.remove("active")
    overlay.classList.remove("active")
})
overlay.addEventListener("click",()=>{
aside.classList.remove("active")
overlay.classList.remove("active")
})




