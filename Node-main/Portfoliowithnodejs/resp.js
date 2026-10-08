burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
leftNav = document.querySelector('.leftNav');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('res-nabar-hei');
    rightNav.classList.toggle('res-nav-elem-vis');
    leftNav.classList.toggle('res-nav-elem-vis');
})