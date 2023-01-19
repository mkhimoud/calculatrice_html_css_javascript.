let ecran = document.getElementById("Ecran")
function display(num) {
    ecran.value += num;
}

function clearecran() {
    ecran.value = "";
}
function Deleteecran(){
    ecran.value = ecran.value.slice(0, -1);
}
function calculate(){
    ecran.value = eval(ecran.value);
}
function removerChar(){
    ecran.value = ecran.value.substring(0,numChar-1)
}
function calculate(){
    try {
        ecran.value = eval(ecran.value);
    }
    catch(err) {
        ecran.value = "Error";
    }
}