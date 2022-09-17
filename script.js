//áudios linkados aos botões de prévias
var emicida = new Audio(
  "https://www.myinstants.com/media/sounds/cidadao-emicida.mp3"
);
var racionais = new Audio(
  "https://www.myinstants.com/media/sounds/capitulo-4-versiculo-3.mp3"
);
var contrafluxo = new Audio(
  "https://www.myinstants.com/media/sounds/a-rua-vai-cobrar-contrafluxo.mp3"
);

//lista dos meus discos
var listaDisco = [
  "https://upload.wikimedia.org/wikipedia/pt/a/a2/Pra_Quem_J%C3%A1_Mordeu_Um_Cachorro_Por_Comida%2C_At%C3%A9_Que_Eu_Cheguei_Longe.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/3/36/Sobrevivendo_no_Inferno.jpg",
  "https://perraps.files.wordpress.com/2009/03/contra-fluxo-00-superacao.jpg"
];

//lista de discos sugeridos pra mim
var listaSugeridos = [""];

//imagens da minha lista de discos com links
document.getElementById("resultado").innerHTML +=
  '<a href="https://www.youtube.com/watch?v=1mYVdBok0pQ&list=OLAK5uy_mYAsDerLPQZ2SeyZfJPup6leIdylwKIMk&index=1" target="_blank"><img src= ' +
  listaDisco[0] +
  ">";
document.getElementById("resultado").innerHTML +=
  '<a href="https://www.youtube.com/watch?v=pL4bzW2qGqQ&list=OLAK5uy_nXyWjwypr-yMtSmeWyapr9gsaecYZe7rQ&index=1" target="_blank"><img src= ' +
  listaDisco[1] +
  "> ";
document.getElementById("resultado").innerHTML +=
  '<a href="https://www.youtube.com/watch?v=EJ5YcoxYQOU" target="_blank"><img src= ' +
  listaDisco[2] +
  ">";

//funções pra execução dos áudios
function Emicida() {
  contrafluxo.pause();
  racionais.pause();
  emicida.play();
}

function Racionais() {
  emicida.pause();
  contrafluxo.pause();
  racionais.play();
}

function Contrafluxo() {
  emicida.pause();
  racionais.pause();
  contrafluxo.play();
}

//função para sugestão de novos discos que são incluídos a lista lá de cima
function sugerir() {
  var listaSugestoes = document.getElementById("sugestao").value;
  document.getElementById("sugestao").value = "";

  //se o disco sugerido já estiver incluído, ele dará um alerta
  if (listaSugeridos.includes(listaSugestoes)) {
    alert("Essa sugestão já foi feita");
  } else {
    document.getElementById("sugestaoImg").innerHTML = "";
    //push pra incluir as sugestões na lista criada anteriormente
    listaSugeridos.push(listaSugestoes);
    //espaço pra aparição da lista com novas sugestões
    for (var i = 0; i < listaSugeridos.length; i++) {
      document.getElementById("sugestaoImg").innerHTML +=
        "<img src=" + listaSugeridos[i] + ">";
    }
  }
}