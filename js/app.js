var button = document.querySelector('#button');

button.addEventListener("click", () => {
    document.querySelector('#button').innerHTML = prompt('button name\'s: ');
}, false)