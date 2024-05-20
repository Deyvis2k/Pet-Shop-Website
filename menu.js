window.addEventListener("scroll", function(){
    let header = document.querySelector('.all_about')
    header.classList.toggle('rolagem',window.scrollY > 0)
})