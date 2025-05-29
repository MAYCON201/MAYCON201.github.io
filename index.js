
// Exibe mensagem personalizada de acordo com o nome informado
function Exibironome() {
  let nome = document.getElementById("c0-campo-nome").value.trim().toLowerCase();
  const mensagens = {
    ana: "Linda ❤️ Maycon & Ana",
    maycon: "Gevoani Moreira!",
    lucas: "Fala Lucas! Tá tudo certo!",
    maria: "Oi Maria, Princesa do Papai!",
    joao: "E aí João!";
  };

  let resultado = document.getElementById("c0-resultado");

  if (mensagens[nome]) {
    resultado.innerHTML = mensagens[nome];
    console.log(mensagens[nome]);
  } else {
    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
    let mensagem = `Oi, tudo bem? ${nomeFormatado} vai Corinthians`;
    resultado.innerHTML = mensagem;
    console.log(mensagem);
  }
}


// Verifica se número é par ou ímpar
function exibeNumero() {
    let numero = parseInt(document.getElementById("c1-campo-numero").value);

    if (numero % 2 === 0) {
        document.getElementById("c1-resultado").innerHTML = "Número par";
    } else {
        document.getElementById("c1-resultado").innerHTML = "Número ímpar";
    }
}

// Gera números aleatórios dentro de um intervalo
function aleatorio() {
    let min = parseFloat(document.getElementById("c-2campo-numerico").value);
    let max = parseFloat(document.getElementById("campo-numerico01").value);
    let d = parseInt(document.getElementById("d").value);
    let valAleatorio = [];

    for (let i = 0; i < d; i++) {
        valAleatorio.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    valAleatorio.sort(Crescente);
    document.getElementById("c-2resultado").innerHTML = valAleatorio.join(", ");
}

// Verifica idade e classifica
function exibesuaIdade() {
    let idade = parseInt(document.getElementById("c3-campo-numero").value);

    if (idade >= 65) {
        document.getElementById("c3-resultado").innerHTML = "Parabéns, você já é aposentado!";
        console.log("Parabéns, você já é aposentado!");
    } else if (idade >= 18) {
        document.getElementById("c3-resultado").innerHTML = "Você é maior de idade.";
        console.log("Você é maior de idade.");
    } else {
        document.getElementById("c3-resultado").innerHTML = "Você é menor de idade.";
        console.log("Você é menor de idade.");
    }
}

// Função auxiliar para ordenação crescente
function Crescente(a, b) {
    return a - b;
}

// Gera jogo da Mega-Sena com números únicos
function GeraJogoMega() {
    let nJogos = parseInt(document.getElementById("c4-campo-numerico").value);
    let JogosMega = [];

    while (JogosMega.length < nJogos) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!JogosMega.includes(numero)) {
            JogosMega.push(numero);
        }
    }

    JogosMega.sort(Crescente);
    document.getElementById("c4-resultado").innerHTML = JogosMega.join(", ");
}

        

    
