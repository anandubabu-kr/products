const toggleButton=document.getElementsByClassName('toggle')[0]
const navBar=document.getElementsByClassName('nav-links')[0]
console.log(toggleButton,navBar)
toggleButton.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})