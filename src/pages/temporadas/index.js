export default () => {
  const container = document.createElement("div");
  const temporadas = `
  <div class="flex">
       <div class="stat">
       <h2 class="title">Titulo 1</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo 2</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo 3</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo 4</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo 5</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo 6</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo 7</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
       <div class="stat">
       <h2 class="title">Titulo8</h2>
       <img src="" alt="img da primeira temporada">
       <p class="text" >Descricao da primeira temporada sem spoiler <a>link do trailer</a></p> 
       </div>
  </div>`;

  container.innerHTML = temporadas;

  return container;
};
