const formulario = document.querySelector("#formularioAcademico");
console.log(formulario);

const campoNome = document.querySelector("#nome");
console.log(campoNome);


const campoNotaUm = document.querySelector("#notaUm");
console.log(campoNotaUm);

const campoNotaDois = document.querySelector("#notaDois");
console.log(campoNotaDois);

const resultados = document.querySelector("#resultados");
console.log(resultados);

const botaoCalcularMedia = document.querySelector("#btnCalcular");
console.log(botaoCalcularMedia);

let mediaCalculada = 0;

let aprovado = false;

let mensagemFinal = "...";

function calcularMedia(valorNotaUm, valorNotaDois) {
   return (valorNotaUm + valorNotaDois) / 2;
}

function verificarAprovacao(mediaCalculada) {

    if(mediaCalculada >= 6){
        return true;
    }
    return false;
}

function mensagemAprovacao(aprovado) {

    switch(aprovado) {
        case true:
            return "Aprovado";
        case false:
            return "Reprovado";
    }
}

botaoCalcularMedia.addEventListener("click", function(){

    const valorNotaUm = Number(campoNotaUm.value);
    console.log(valorNotaUm);

    const valorNotaDois = Number(campoNotaDois.value);
    console.log(valorNotaDois);

    mediaCalculada = calcularMedia(valorNotaUm, valorNotaDois);

    aprovado = verificarAprovacao(mediaCalculada);

    console.log("mediaCalculada: ", mediaCalculada);

    console.log("aprovado: ", aprovado);

    mensagemFinal = mensagemAprovacao(aprovado);

    console.log("mensagemAprovacao: ", mensagemAprovacao(aprovado));

    resultados.textContent = mensagemFinal;

})


