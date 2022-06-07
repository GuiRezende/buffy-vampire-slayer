//importar a tela principal HOME para o JS principal
import home from "./pages/home/index.js";
//importar a tela secundaria de TEMPORADAS para o JS principal
import temporadas from "./pages/temporadas/index.js";
//importa a tela ATORES para o JS principal
import atores from "./pages/atores/index.js";
//importa a tela PODCAST para o JS principal
import podcast from "./pages/podcast/index.js";
//importa a tela SOBRE O DEV para o JS principal
import aboutDev from "./pages/aboutDev/index.js";

//armazeno em MAIN o caminho para chegar ao ROOT do HTML
//Como se trata de um elemento, preciamos passar o identificador #
const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "":
        main.appendChild(home());
        break;
      case "#temporadas":
        main.appendChild(temporadas());
        break;
      case "#atores":
        main.appendChild(atores());
        break;
      case "#podCasts":
        main.appendChild(podcast());
        break;
      case "#aboutDev":
        main.appendChild(aboutDev());
        break;
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(home());
  init();
});
