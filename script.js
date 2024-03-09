// Declaración de Varables de selectores
const campo_texto = document.querySelector(".texto");
const campo_mensaje = document.querySelector(".mensaje");

//Matriz con los valores a reemplazar para encriptar
const matriz_code = [
    ["e","enter"], // Indice 0
    ["i","imes"],  // Indice 1
    ["a","ai"],    // Indice 2
    ["o","ober"],  // Indice 3
    ["u","ufat"],  // Indice 4
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
    campo_mensaje.style.backgroundImage = "none";
    
}

function encriptar(frase){
    for (let i = 0; i < matriz_code.length ; i++){
        if(frase.includes(matriz_code[i][0])){
            frase = frase.replaceAll(
                matriz_code[i][0], matriz_code[i][1]
            )
        }
    }
    return frase
}
function btnDesncriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_mensaje.style.backgroundImage = "none"
}
function desencriptar(fraseEnc){
    for (let i = 0; i < matriz_code.length ; i++){
        if(fraseEnc.includes(matriz_code[i][1])){
            fraseEnc = fraseEnc.replaceAll(
                matriz_code[i][1], matriz_code[i][0]                
            )
        }
    }
    return fraseEnc
}

function btnCopiar(){
    var copyText = document.getElementById("textoMensaje");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}
