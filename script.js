
// Crie uma variável para armazenar o nome do herói

let nome = "Amorim Matheus";

//quantidade de experiência (XP) de um herói

let quantidadeDeExperienciaXP = 800;



// Crie uma variável para armazenar o nível do herói
let nivel = "";


// Crie uma estrutura condicional para definir o nível do herói com base na quantidade de XP

if (quantidadeDeExperienciaXP < 1000) {
    nivel = "ferro";
}
else if (quantidadeDeExperienciaXP >=1001 && quantidadeDeExperienciaXP <=2000) {
    nivel = "bronze";
}
else if (quantidadeDeExperienciaXP >=2001 && quantidadeDeExperienciaXP <=5000) {
    nivel= "prata";
}
else if (quantidadeDeExperienciaXP >=5001 && quantidadeDeExperienciaXP <=7000) {
    nivel = "ouro";
}

else if (quantidadeDeExperienciaXP >=7001 && quantidadeDeExperienciaXP <=8000) {
    nivel = "platina";
}

else if (quantidadeDeExperienciaXP >=8001 && quantidadeDeExperienciaXP <=9000) {
    nivel = "ascendente";
}

else if (quantidadeDeExperienciaXP >=9001 && quantidadeDeExperienciaXP <=10000) {
    nivel = "imortal";
}
 
else  {
    nivel = "radiante";
}

console.log("O heroi de nome " + nome + " esta no nivel " + nivel);
