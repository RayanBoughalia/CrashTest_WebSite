var button = document.querySelector('#button');

button.addEventListener("click", () => {
    document.querySelector('#button')[0].innerHTML = prompt('button name\'s: ');
}, false)