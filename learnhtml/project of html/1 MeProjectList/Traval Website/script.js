const videoCommon = document.querySelectorAll('.videoCommon')
const burger = document.querySelector('.burger')
const searchA = document.querySelector('.home .titleHome a i')   
const searchbtn = document.querySelector('.home .titleHome #searchBtn')  
const rightNav = document.querySelectorAll('.navBar .rightNav a')    //doing this step we get only those a tag who inside navigation Bar
// const rightNav = document.querySelectorAll('a')   //if we do like that there is no problem working code is fine but doing that we get all a tag in html file so this step make our website slow down   
const rightNavBig = document.querySelector('.navBar .rightNav')

// For Burger
burger.addEventListener('click', ()=>{
    rightNavBig.classList.toggle('aaa');
})

rightNav.forEach(value => {
    value.addEventListener('click', ()=>{
        rightNavBig.classList.remove('aaa')
    })
})

// For Video Effect
videoCommon.forEach(item => {
    item.addEventListener('click', ()=> {
        document.querySelector('.video .active').classList.remove('active');
        item.classList.add('active');
        let src = item.getAttribute('data-src')
        document.querySelector('#video1').src = src;
    })
})

