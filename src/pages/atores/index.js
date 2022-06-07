export default () => {
  const container = document.createElement("div");

  const atores = `<div class="flex">
                        <div class="stat">
                          <h2 class="title">Atora A</h2>
                          <img src="" alt="Buffy segurando uma estaca, arma de matar vampiros">
                      </div>
                      <div class="stat">
                          <h2 class="title">Atora B</h2>
                          <img src="" alt="Buffy segurando uma estaca, arma de matar vampiros">
                      </div>
                      <div class="stat">
                          <h2 class="title">Atora C</h2>
                          <img src="" alt="Buffy segurando uma estaca, arma de matar vampiros">
                      </div>
                      <div class="stat">
                          <h2 class="title">Atora D</h2>
                          <img src="" alt="Buffy segurando uma estaca, arma de matar vampiros">
                      </div>
                      <div class="stat">
                          <h2 class="title">Atora E</h2>
                          <img src="" alt="Buffy segurando uma estaca, arma de matar vampiros">
                      </div>
                      <div class="stat">
                          <h2 class="title">Atora F</h2>
                          <img src="" alt="Buffy segurando uma estaca, arma de matar vampiros">
                      </div>
                </div>`;
  container.innerHTML = atores;
  return container;
};
