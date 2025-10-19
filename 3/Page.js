function sayHello(name) { 
    window.lbl.innerHTML = "Hello" + name; //no value.
}

//metod 2 

function sayHello2(name, textbox) {
    window.lbl.innerHTML = "Hello" + name;
    textbox.value = "Done!";
}

//metod 3 

function showInfo(id, name, address= "rinkeby") { 
    var msg = "ID:" + id 
    + "<br>Name: " + name 
    + "<br>Address: " + address;
    window.lbl.innerHTML = msg;

}
