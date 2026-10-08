let username = document.querySelector('.name');
let submit = document.querySelector('.submit');
let storage = localStorage.getItem('myLoaclStorage');
let displayScore = document.querySelector('.displayScore');

let globalStorage = JSON.parse(localStorage.getItem('globalStorage')) || [];

const MAX_HIGH_SCORES = 5;

displayScore.innerHTML = storage;

// Disable username button till user enter your name
username.addEventListener('keyup', ()=>{
    submit.disabled = !username.value;
})

myfunction = (e)=> {
    e.preventDefault();
    console.log(globalStorage)
    let score = {
        score: storage,
        name: username.value,
    }
    globalStorage.push(score);
    globalStorage.sort((a,b) => b.score - a.score)
    globalStorage.splice(5);
    
    localStorage.setItem('globalStorage', JSON.stringify(globalStorage))
    window.location.assign('./index.html');
}