// Abrir uma imagem parcionada
var coluna = document.querySelectorAll(".coluna");

// Ordem das imagens corretas
var ordemCorreta = [
  "9.jpg",
  "8.jpg",
  "7.jpg",
  "6.jpg",
  "5.jpg",
  "4.jpg",
  "3.jpg",
  "2.jpg",
  "1.jpg"
];

// Elementos arrastáveis
document.addEventListener("dragstart", (elem) => {
  elem.target.classList.add("arrastando");
});

document.addEventListener("dragend", (elem) => {
  elem.target.classList.remove("arrastando");
  // Chamar função para confirmar a montagem do quebra-cabeça
  verificarOrdem();
});

// Quando sobre o lugar soltável
coluna.forEach((coluna) => {
  coluna.addEventListener("dragover", (elem) => {
    elem.preventDefault(); // Evitar o comportamento padrão de não permitir a soltura
    coluna.classList.add("hover");
  });

  coluna.addEventListener("dragleave", (elem) => {
    coluna.classList.remove("hover");
  });

  coluna.addEventListener("drop", (elem) => {
    coluna.classList.remove("hover");
    var elementoArrastado = document.querySelector(".arrastando");
    // Inverter os elementos (troca deles)
    var filho = coluna.children[0];
    var colunaElementoArrastado = elementoArrastado.parentElement;
    colunaElementoArrastado.appendChild(filho);
    coluna.appendChild(elementoArrastado);
  });
});

// Elementos iguais
function arraysIguais(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

// Verificar se os vetores estão na posição correta
function verificarOrdem() {
  var imagensAtuais = [];
  coluna.forEach((coluna) => {
    var parte = coluna.querySelector("img");
    if (parte) {
      imagensAtuais.push(parte.src.split("/").pop());
    }
  });

  console.log(imagensAtuais);
  console.log(ordemCorreta);

  // Verificar se as imagens atuais correspondem à ordem correta
  if (arraysIguais(imagensAtuais, ordemCorreta)) {
    console.log("Quebra-cabeça resolvido!");
    // Adicione a lógica para exibir uma mensagem quando o quebra-cabeça for resolvido
    alert("Parabéns! Você completou o quebra-cabeça!");
  }
}

// Sortear aleatoriamente as imagens
function sortearImagem() {
  var numeros = [];
  for (let i = 1; i <= 9; i++) {
    var aleatorio = Math.ceil(Math.random() * (9 - 0) + 0); // 0 é exclusivo
    while (numeros.includes(aleatorio)) {
      aleatorio = Math.ceil(Math.random() * (9 - 0) + 0);
    }
    numeros.push(aleatorio);
    var parte = document.getElementById("parte" + i);
    parte.src = "IMG/" + aleatorio + ".jpg";
  }
  verificarOrdem();
}

sortearImagem();
