// Muestra los datos recogidos en la consulta a base de datos
function mostrarResultado(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            document.getElementById("txtHint").innerHTML = '<p>' + this.responseText + '</p>';
        }
        xmlhttp.open("GET", "./php/ciudades.php?q=" + str);
        xmlhttp.send();
    }
}
