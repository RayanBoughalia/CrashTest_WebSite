const button = document.querySelector('#button');

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    document.querySelector('#button').innerHTML = name; 
    if (name == "hide") {
        button.hidden = true
    }
}, false)

function setData(key, value) {
    localStorage.setItem(key, value)
}