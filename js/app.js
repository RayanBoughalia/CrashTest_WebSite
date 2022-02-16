const button = document.querySelector('#button');

class Local_Storage{
    ADD(key, value){

        localStorage.setItem(key, value);
    }

    REMOVE(key){
        localStorage.removeItem(key)
    }

    CLEAR(){
        localStorage.clear()
    }
}

const local_storage = new Local_Storage();

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    document.querySelector('#button').innerText = name; 
    if (name == "hide") {
        button.hidden = true
    }
}, false)

if(window.closed == true){
    local_storage.CLEAR()
}