

let list = document.querySelector('.list')
let globalStorage = JSON.parse(localStorage.getItem('globalStorage'));
console.log(globalStorage);
list.innerHTML = globalStorage.map(score => {
    return `<li>${score.name} - ${score.score}</li>`
}).join('')

