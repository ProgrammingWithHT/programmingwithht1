const buttons = document.querySelectorAll('button');
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));


for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i]

    btn.addEventListener('click', function (event) {
        event.target.classList.toggle('active');
    });
}