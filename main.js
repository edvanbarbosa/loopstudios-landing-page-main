const element = (e)=> document.querySelector(e)
const iconBurguer = element('.burguer')
const menuMobile = element('.menu-mobile')
const iconClose = element('.icon-close')


const menuMobileVisible = ()=>{
    menuMobile.style.display = 'block'
}

const menuMobileInvisible = ()=>{
    menuMobile.style.display = 'none'
}

iconBurguer.addEventListener('click', menuMobileVisible)
iconClose.addEventListener('click',menuMobileInvisible)

window.addEventListener('resize',()=>{
    window.innerWidth > 900? menuMobileInvisible(): undefined
})