export default () => {
  const container = document.createElement("div");
  const aboutMe = `<h1>Oi, sou o Guilherme </h1>
                    <img src"" alt="Este sou eu, criador da pagina">
                    <p>
                        Texo sobre mim aqui, Sou um cara legal apaixonado por T.I;
                        Atualmente minha namorada esta assistindo a essa serie e esta adorando
                        portanto, decidi criar essa pagina para abordar conteduos sobre a serie.
                    </p>`;

  container.innerHTML = aboutMe;
  return container;
};
