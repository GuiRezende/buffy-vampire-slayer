export default () => {
  const container = document.createElement("div");
  const curiosidade = `<div>
                            <h1>Curiosidade 1</h1>
                            <p>Você sabia que com o desaparecimento de Angel na série. Ele foi para sua própria série entitulada Angel? <a>Click e saiba mais</a></p>
                         </div>`;
  container.innerHTML = curiosidade;

  return container;
};
