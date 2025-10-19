function sayHello() {  //دالة 
    var name = window.txtName.value;
    document.getElementById("lbl").innerHTML = "Hello " + name;
}

function showUserAndPass() {
    var user = window.txtUser.value; //قيمة متغير 
    var pass = window.txtPass.value; 
    var msg = "<hr>" + user + "<hr>" + pass + "<hr>"; //متغير يلي بدي اعرضو
    window.lblmsg.innerHTML = msg;
}