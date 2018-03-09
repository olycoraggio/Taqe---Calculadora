
function number(a) {
    document.getElementById("insercao").value += a;
}

function DEL() {
    document.getElementById("insercao").value = "";
    document.getElementById("resultado").value = "";
}

function equal() {
    let a = document.getElementById("insercao").value
    document.getElementById("resultado").value = eval(a);

}

