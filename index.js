function Exibironome() {
    let nome = document.getElementById("campo-nome").value;
    alert(nome);
}
function Exibironome() {
    let nome = document.getElementById("c0-campo-nome").value;
    document.getElementById("c0-resultado").innerHTML =
        "Oi tudo bem?, " + nome + "!";
        console.log(".");
    if(Ana==Ana)
            document.getElementById("c0-resultado").innerHTML =
        console.log("Amor da minha vida"){
        }

        
}

function exibeNumero() {
    let numero = document.getElementById("c1-campo-numero").value;
    if (numero % 2 == 0) {
        document.getElementById("c1-resultado").innerHTML = "Numero par";
    } else {
        document.getElementById("c1-resultado").innerHTML = "Numero impar ";
    }
}

function aleatorio() {
    let min = parseFloat(document.getElementById("c-2campo-numerico").value);
    let max = parseFloat(document.getElementById("campo-numerico01").value);
    let d = parseFloat(document.getElementById("d").value);
    console.log(typeof min, min, max, d);

    let valAleatorio = [];
    for (let i = 0; i < d; i++) {
        valAleatorio.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    document.getElementById("c-2resultado").innerHTML = valAleatorio;
}

function exibesuaIdade() {
    let numero = document.getElementById("c3-campo-numero").value;
    if (numero >= 18) {
        document.getElementById("c3-resultado").innerHTML =
            "Você e maior de idade";
            console.log("Você e maior de idade");
    } else if (numero < 18) {
        document.getElementById("c3-resultado").innerHTML =
            "voce e menor de idade ";
        console.log("Menor de idade");

    } else if (numero == 65) {
        document.getElementById("c3-resultado").innerHTML =
            "voce ja e aposentado ";
        console.log("Parabéns você ja e aposetado");
    }
}
function Crescente(a, b) {
    return a - b;
}
function GeraJogoMega() {
    let nJogos = parseFloat(document.getElementById("c4-campo-numerico").value);
    let JogosMega = [];
    let Numerossorteados;
    for (let i = 0; i < nJogos; i++) {
        Numerossorteados = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
        if (JogosMega.includes(Numerossorteados)) {
            Numerossorteados = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
        }
        JogosMega.push(Numerossorteados);
    }
    JogosMega.sort(Crescente);
    document.getElementById("c4-resultado").innerHTML = JogosMega;
}
