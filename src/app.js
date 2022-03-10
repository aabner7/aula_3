const btnFunction = document.getElementById("btn-function");
const numeroSecreto = parseInt(Math.random() * 11);
let count = 0;
let elementoResultado = document.getElementById("resultado");

function Chutar() {
    if (count < 3) {
        const chute = parseInt(document.getElementById("valor").value);
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
        count++;
    } else {
        elementoResultado.innerHTML = "kkkkkkk otario tu é ruim d++++++";
    }
}

btnFunction.addEventListener("click", (event) => {
    Chutar();
})