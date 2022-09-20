var sentence = window.prompt("Inserta una frase: ");
var letter = window.prompt("Inserta una letra: ");
let cont = 0;
for(let i=0; i<sentence.length; i++){
    if (sentence[i] == letter){
        cont++;
    }
}

alert("La letra "+ letter + " aparece " + cont + " veces" );