function calcularRadio() {
    // Leemos del input con id "radio"
    let radio = parseInt(document.getElementById("radio").value);
    //prompt lee como texto pero la función pow asume que es número, no requiere conversión
    var area = Math.PI * Math.pow(radio, 2);
    document.getElementById("result").innerHTML = '<span style="color: red;">' + area + '</span>';
}