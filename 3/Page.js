function sayHello(name) { //يبعت متغير اسمو نييم
    window.lbl.innerHTML = "Hello" + name; //no value.
}

//metod 2 

function sayHello2(name, textbox) {
    window.lbl.innerHTML = "Hello" + name;
    textbox.value = "Done!";
    // ارسال عنصر كامل 
}

//metod 3 

function showInfo(id, name, address= "rinkeby") { //تثبيت القيمة وتبقى في الاخر بين الاقواس
    var msg = "ID:" + id 
    + "<br>Name: " + name 
    + "<br>Address: " + address;
    window.lbl.innerHTML = msg;
}