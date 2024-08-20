window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("mensaje2").value = cifrar(texto, clave);
        document.getElementById("mensaje").value = "";
    }, true);

    document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("mensaje2").value = descifrar(texto, clave);
    }, true);
}

function cifrar(texto, clave) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ"
    let vocales = "ÁÉÍÓÚ"
    let numeros = "0123456789";
    let otros = `!¡¿?()=-+`

    const caracteres = letras + vocales + numeros + otros;

    clave = (clave % caracteres.length + caracteres.length) % caracteres.length;
    console.log(caracteres);
    console.log(texto);

    for (let i = 0; i < texto.length; i++) {
        if (caracteres.indexOf(texto[i]) != -1) {
            let posicion = ((caracteres.indexOf(texto[i]) + clave) % caracteres.length);
            resultado += caracteres[posicion];
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}

function descifrar(texto, clave) {

    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
    let vocales = "ÁÉÍÓÚ"
    let numeros = "0123456789";
    let otros = `!¡¿?()=-+`

    const caracteres = letras + vocales + numeros + otros;
    //  Esto es por si la clave es negativa
    //desplazamiento = (desplazamiento % 26 - 26) % 26;
    clave = (clave % caracteres.length - caracteres.length) % caracteres.length;

    for (let i = 0; i < texto.length; i++) {
        if (caracteres.indexOf(texto[i]) != -1) {
            let position = ((caracteres.indexOf(texto[i]) - clave) % caracteres.length);
            resultado += caracteres[position];
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}







const inputNumber = document.querySelector(".card input");

const addValue = () => {
    inputNumber.value = Number(inputNumber.value) + 1;
};

const subtractValue = () => {
    if (inputNumber.value > 0) {
        inputNumber.value = Number(inputNumber.value) - 1;
    }
};