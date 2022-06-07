//TEMPLATE DA PÁGINA HOME
//COMO SERÁ UTILIZADO EM OUTROS LUGARES CHAMA-SE O export PARA EXPORTAR
// CRIAMOS UMA FUNÇÃO PARA EXPORTALO
export default () => {
  //criar um container para exportar tudo por ele
  const container = document.createElement("div");

  const template = `<h2>Aqui falaremos um pouco sobre Buffy</h2>
    <p>Essa incrivel serie começou nos anos 90, não no inicio dos anos 90
    mas logo pelo finalzinho dos anos 90, em 98! Buffy trata-se de uma serie...</p>
    <h3>Buff - The Vampire Slayer</h3>`;

  //envia para a DIV-container o valor de TEMPLATE
  container.innerHTML = template;

  return container;
};
