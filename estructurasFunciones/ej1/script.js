function menor(a,b,c) {
    alert ("Inserta un número entero")
    var a =prompt("a")
    var b =prompt("b")
    var c =prompt("c")
    if (a <= b && a <= c) {
        return alert (a);
    } else if (b <= a && b <= c) {
        return alert (b);
    } else {
        return alert (c);
    }
}
const veces = function(sentence,letter) {
    var sentence = window.prompt("Inserta una frase: ");
    var letter = window.prompt("Inserta una letra: ");
    let cont = 0;
    for(let i=0; i<sentence.length; i++){
        if (sentence[i] == letter){
            cont++;
        }
    }
    return alert("La letra "+ letter + " aparece " + cont + " veces" );
};