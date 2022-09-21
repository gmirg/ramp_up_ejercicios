function longitud() {
    let num1 = parseInt(prompt('Introduce un número:'));
    let counter = 0;
    do {
        num1 = Math.floor( num1 /10);
        counter++;
    } while( num1 != 0);
    alert('Tu número tiene ' + counter + ' dígitos');
}
function imprimir() {
    let veces = (prompt('Introduce el número de veces a imprimir * ?'));
    var repeticion = "";
    const cadena = "*";
    while (veces > 0) {
        debugger;
        repeticion += cadena;
        veces--;
    }
    document.write(repeticion); 
}
function secuencia() {
    const a = "*";
    const b = "+";
    const c = "_";
    for (let i = 0; i <= 3; i++) {
        document.write(a);
        document.write(b);
        document.write(c);
    }
}
function arbol() {
    let cadena = "";
    for (let vert = 1; vert <= 5; vert++) {
        for (horz = 0; horz < vert; horz++ ) {
            cadena += "*";
        }
        cadena += "\n";  
    }
    alert(cadena);
}