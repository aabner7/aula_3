var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    console.log("executei")
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    for (var i = 0, i < 3, i++) {
        if (chute > 10 | chute < 0) {
            elementoResultado.innerHTML = "tu é imbecil? ta falando aqui que é de 0 a 10";
        } else {
            if (chute == numeroSecreto) {
                elementoResultado.innerHTML = "Parabéns, seu merda.";
            } else if (chute > numeroSecreto) {
                elementoResultado.innerHTML = "Errou, babaca. é menor";
            } else {
                elementoResultado.innerHTML = "Errou, babaca. é maior";
            }
        }
    }
    console.log = "Você tem mais " + i + "tentativas, caralho");
}
const Test = () => {
    console.log("executei 2");
}