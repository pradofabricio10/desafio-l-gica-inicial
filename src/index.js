// Desafio Classificador de nível de Herói
//## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Variáveis para armazenar o nome do herói e a quantidade de experiência (XP)
// Variáveis para armazenar o nome do herói e a quantidade de experiência (XP)
let nomeHeroi = "Batman";
let quantidadeXp = 10001;

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão com switch case para classificar o nível do herói com base na quantidade de XP
switch (true) {
    case (quantidadeXp <= 1000):
        nivel = "Ferro 🟡";
        break;
    case (quantidadeXp >= 1001 && quantidadeXp <= 2000):
        nivel = "Bronze 🟤";
        break;
    case (quantidadeXp >= 2001 && quantidadeXp <= 5000):
        nivel = "Prata 🔵";
        break;
    case (quantidadeXp >= 5001 && quantidadeXp <= 7000):
        nivel = "Ouro 🟠 ";
        break;
    case (quantidadeXp >= 7001 && quantidadeXp <= 8000):
        nivel = "Platina 🟪";
        break;
    case (quantidadeXp >= 8001 && quantidadeXp <= 9000):
        nivel = "Ascendente 🟩";
        break;
    case (quantidadeXp >= 9001 && quantidadeXp <= 10000):
        nivel = "Imortal 🟨 ";
        break;
    case (quantidadeXp >= 10001):
        nivel = "Radiante 🌞";
        break;
    default:
        nivel = "Nível desconhecido";
        break;
}

// Exibe a mensagem final no console
console.log(`O Herói de nome *${nomeHeroi}* está no nível de * ${nivel} *`);
