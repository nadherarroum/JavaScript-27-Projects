function weightConverterKg(valNum) {
    var valNum = valNum*2.2046;
    var n = valNum.toFixed(0);
    document.getElementById("outputPounds").innerHTML = n;
}

function weightConverterP(valNum) {
    var valNum = valNum/2.2046;
    var n = valNum.toFixed(0);
    document.getElementById("outputKilograms").innerHTML = n;
}