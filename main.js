/** Ex boucle for **/

function ex2() {
	var c = parseInt(prompt("nombre ?"));
	var z = 0;
	for (i = 1; i <= c; i++) {
		z = z + i;
		document.write(i + "+");
	}
	document.write("=" + z);
}
/*Faire le rectangle */
function ex3() {
	var a = parseInt(prompt("largeur?"));
	var b = parseInt(prompt("longueur?"));
	for (var i = 0; i < a; i++) {
		for (var j = 0; j < b; j++) {
			document.write("*")
		}
		document.write("<br />");
	}
	document.write("<br />");
}
/*Faire les multiplications */
function ex1() {
	var c = parseInt(prompt("nb?"));
	for (i = 0; i < 11; i++) {
		z = c * i;
		document.write(c + " x " + i + " = " + z + "</br>");
	}
}

//ex1();
//ex2();
ex3();