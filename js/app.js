const button = document.querySelector('#button1');

class Local_Storage{
    add(key, value){

        localStorage.setItem(key, value);
    }

    remove(key){
        localStorage.removeItem(key)
    }

    get clear(){
        localStorage.clear()
    }
}

const local_storage = new Local_Storage();

button.addEventListener("click", () => {
    var name = prompt('button name\'s: ');
    local_storage.add('nom', name)
    document.querySelector('#button1').innerText = name; 
		if(name){
				if(name == "hide"){
						button.hidden = true
				}
		}else{
				document.querySelector('#button1').innerText = "null"
		}
}, false)

document.querySelector('#button2').addEventListener("click", () =>{
	document.querySelector("#button1").hidden = !document.querySelector("#button1").hidden
});

// Do something before the window is closed
// Issues: alert() doesn't execute but local_storage.add() do.
window.addEventListener('beforeunload', e => {
    window.alert('r u sure?');
    local_storage.add('windowsStatue', 'close at '+Date())
    local_storage.clear
});
