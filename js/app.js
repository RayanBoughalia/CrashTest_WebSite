const button = document.querySelector('#button');

class Local_Storage{
    add(key, value){

        localStorage.setItem(key, value);
    }

    remove(key){
        localStorage.removeItem(key)
    }

    clear(){
        localStorage.clear()
    }
}

const local_storage = new Local_Storage();

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    local_storage.add('nom', name)
    document.querySelector('#button').innerText = name; 
    if (name == "hide") {
        button.hidden = true
    }
}, false)


// Do something before the window is closed
// Issues: alert() doesn't execute but local_storage.add() do.
window.addEventListener('beforeunload', () => {
    window.alert('r u sure?');
    local_storage.add('windowsStatue', 'close at '+Date())
});