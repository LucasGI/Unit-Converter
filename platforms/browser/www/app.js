//tmperature
var c;
var f;
console.log($(".tmpType").val);
function calTemp() {
    var n = document.getElementById("usrTemp").value;
    if (n.length < 1)
    {
        Materialize.toast('You Must Enter A Value First!', 2000, 'rounded') 
        return false;
    } else {
        calcTemp(n)
    }
}

function calcTemp(a) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    if (document.getElementById('temp1').checked) {
        temp1 = true;
    } else {
        temp1 = false;
    }
    console.log(temp1);
    if (document.getElementById('temp2').checked) {
        temp2 = true;
    } else {
        temp2 = false;
    }
    console.log(temp2);
    if (document.getElementById('temp3').checked) {
        temp3 = true;
    } else {
        temp3 = false;
    }
    console.log(temp3);
    if (document.getElementById('temp4').checked) {
        temp4 = true;
    } else {
        temp4 = false;
    }
    console.log(temp4);
    if (document.getElementById('temp5').checked) {
        temp5 = true;
    } else {
        temp5 = false;
    }
    console.log(temp5);
    if (document.getElementById('temp6').checked) {
        temp6 = true;
    } else {
        temp6 = false;
    }
    console.log(temp6);
// °
    if (temp1 === true && temp4 === true) {
        document.getElementById("tmpVal").value = (a + "° F");
    } else if (temp1 == true && temp5 == true) {
        document.getElementById("tmpVal").value = ((a-32)*(5/9) + "° C");
    } else if (temp1 == true && temp6 == true) {
        document.getElementById("tmpVal").value = ((a + 459.67)*(5/9) + "° K");
    }

}
console.log("nope")