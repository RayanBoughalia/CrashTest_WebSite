const button = document.querySelector('#button');

button.addEventListener("click", () => {
    document.querySelector('#button').innerHTML = prompt('button name\'s: ');
    if (button.innerHTML == 'hide') {
        button.hidden = true
    }
}, false)