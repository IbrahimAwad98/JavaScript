function sayHello() {
    var name = window.txtName.value;
    document.getElementById("lbl").innerHTML = "Hello " + name;
}

function showUserAndPass() {
    var user = window.txtUser.value; 
    var pass = window.txtPass.value; 
    var msg = "<hr>" + user + "<hr>" + pass + "<hr>"; 
    window.lblmsg.innerHTML = msg;

}
