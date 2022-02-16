const button = document.querySelector('#button');

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    document.querySelector('#button').innerHTML = name; 
    localStorage.setItem('RecentName', name)
    if (name == "hide") {
        button.hidden = true
    }
}, false)