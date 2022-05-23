const notificationBtn = document.getElementById("notification-btn")
const closeIcon = document.getElementById("close-icon")
const modalBg = document.querySelector(".modal-bg")


notificationBtn.addEventListener("click", function() {
    modalBg.classList.remove("hidden")
})

closeIcon.addEventListener("click", function(){
    modalBg.classList.add("hidden")
})

document.addEventListener("keydown", function(e){
    if(e.code == 'Escape') {
        modalBg.classList.add("hidden")
    }
})
document.addEventListener("click", function(e){
    if(e.target.classList == "modal-bg") {
    modalBg.classList.add("hidden")
    }
})