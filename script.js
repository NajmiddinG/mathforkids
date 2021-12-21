var value1 = 0;
var value2 = 0;
var praxis = "+";

function begin() {
    value1 = parseInt(25 * (Math.random()));
    value2 = parseInt(25 * (Math.random()) + 1);
    document.getElementsByClassName("math1")[0].innerHTML = value1;
    document.getElementsByClassName("math3")[0].innerHTML = value2;
    document.getElementsByClassName('value2')[0].innerHTML = parseInt(10 * Math.random());
    document.getElementsByClassName('value3')[0].innerHTML = parseInt(10 * Math.random());
    document.getElementsByClassName(`value1`)[0].innerHTML = parseInt(eval(value1 + praxis + value2));
    document.getElementsByClassName('math2')[0].innerHTML = praxis;

}

function reverce(value, html) {
    document.getElementsByClassName("item_active")[0].classList.remove("item_active");
    praxis = value;
    html.classList.add("item_active");
    begin();
}

function result(value) {
    value1 = parseFloat(document.getElementsByClassName("math1")[0].textContent);
    value2 = parseFloat(document.getElementsByClassName("math3")[0].textContent);
    praxis = document.getElementsByClassName("math2")[0].textContent;
    if (parseInt(eval(value1 + praxis + value2)) == parseInt(value.textContent)) {
        value1 = parseInt(25 * (Math.random()));
        value2 = parseInt(25 * (Math.random()) + 1);
        document.getElementsByClassName("math1")[0].innerHTML = value1;
        document.getElementsByClassName("math3")[0].innerHTML = value2;
        let i = 0;
        while (i != 3 && i != 1 && i != 2) {
            i = parseInt(10 * Math.random());
        }
        document.getElementsByClassName('value1')[0].innerHTML = parseInt(10 * Math.random());
        document.getElementsByClassName('value2')[0].innerHTML = parseInt(10 * Math.random());
        document.getElementsByClassName('value3')[0].innerHTML = parseInt(10 * Math.random());
        document.getElementsByClassName(`value${i}`)[0].innerHTML = parseInt(eval(value1 + praxis + value2));
    } else {
        console.log("yo'q");
    }
}

window.onload = begin();