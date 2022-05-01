const elnav = document.querySelector('.site-header-nav')
const elnavbtn = document.querySelector('.site-header__wrraper-burger')

elnavbtn.addEventListener('click', () =>  {
    elnav.classList.toggle('site-header-nav--open')
})