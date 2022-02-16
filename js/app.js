const button = document.querySelector('#button');

class Local_Storage{
    get ADD(key, value){
        localStorage.setItem(key, value);
    }

    get REMOVE(key){
        localStorage.removeItem(key)
    }

    get CLEAR(){
        localStorage.clear()
    }
}

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    document.querySelector('#button').innerHTML = name; 
    if (name == "hide") {
        button.hidden = true
    }
}, false)