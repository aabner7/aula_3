const btnFunction = document.getElementById("btn-function");
const container = document.getElementById("container");
const numeroSecreto = parseInt(Math.random() * 11);
let count = 0;
let elementoResultado = document.getElementById("resultado");

function Chutar() {
  if (count < 3) {
    const chute = parseInt(document.getElementById("valor").value);
    if ((chute > 10) | (chute < 0)) {
      elementoResultado.innerHTML =
        "tu é imbecil? ta falando aqui que é de 0 a 10";
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

const addImageToContainer = (urlImage) => {
  const img = document.createElement("img");
  img.src = urlImage;
  container.appendChild(img);
};

btnFunction.addEventListener("click", (event) => {
  Chutar();
});

const urlImageArray = [
  "https://images.uncyc.org/pt/thumb/3/37/Rei_do_Kuduro.jpeg/250px-Rei_do_Kuduro.jpeg",
  "https://pbs.twimg.com/profile_images/1246582076599603201/3xZojtGp_400x400.jpg",
  "https://blogger.googleusercontent.com/img/a/AVvXsEj3gqq5P3jRmYNPZjCEucPI6R-HrmU7WRGb8P4QDdG764_Dp5EqYdn0NRH9S7SxCYy5529VygkMc2sevghbfM0_JJlQRvh_4OxiaSQtOqFqNnwcFXVgJYzA_nSj3mA_ZhT3vGXrHSDeE1voDYnN6WU8srS0GuYJHX_eAiyCqWIPCaUw8DcT97le8Hn-BA=w640-h640",
  "https://imageproxy.ifunny.co/resize:320x,crop:x800,quality:90x75/images/6aada8c2eb5b7c29ea002509885ccf4d18ac67bf69319779300f12ddd06853b0_3.jpg",
  "https://i.ytimg.com/vi/kN84y57-LVQ/hqdefault.jpg",
];

setInterval(() => {
  addImageToContainer(
    urlImageArray[Math.floor(Math.random() * urlImageArray.length)]
  );
}, 1000);
