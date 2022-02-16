const button = document.querySelector('#button');

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    localStorage.setItem('name', name);
    document.querySelector('#button').innerHTML = name; 
    if (name == "hide") {
        button.hidden = true
    }
}, false)