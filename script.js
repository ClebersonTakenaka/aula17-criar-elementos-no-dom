import { arrayPostagens } from "./listaPostagens.js";

// aqui captura o main 
const main = document.querySelector('main');

for (let i = 0; i < arrayPostagens.length; i++) {
 
//CRIAR ELEMENTO
const article = document.createElement('article')
article.id = "post-1"
console.log(article)

  //POPULAR ELEMENTO

 
  article.innerHTML = `
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
  </article> 
  `
  // ADICIONAR O ELEMENTO NA DOM

  // aqui criar um filho article dentro da main
  main.appendChild(article)
}
