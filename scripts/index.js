// Valor disponível para aposta.
const availableToBet = 500;

// Itens para aposta.
const items = [
  {
    id: 1,
    reward: 1000,
    name: 'Batman',
    src: './assets/img/batman.png',
  }, {
    id: 2,
    reward: 120,
    name: 'SpiderMan',
    src: './assets/img/spiderman.png',
  }, {
    id: 3,
    reward: -40,
    name: 'Deadpool',
    src: './assets/img/deadpool.png',
  }, {
    id: 4,
    reward: -5000,
    name: 'Bomb',
    src: './assets/img/bomb.png',
  },
];

// Define no HTML o valor disponível para apostar.
const balanceElement = document.getElementById('balance');
balanceElement.innerHTML = availableToBet;

// Define a ação ao clicar no botão SPIN.
const spinButtonElement = document.getElementById('spin-button');
spinButtonElement.addEventListener('click', () => {
  const slotItemOneElement = document.getElementById('slot-item-1');
  const slotItemTwoElement = document.getElementById('slot-item-2');
  const slotItemThreeElement = document.getElementById('slot-item-3');

  // Método que randomiza o objeto que será exibido em cada slot.
  function shufflee() {
    const itemsLenght = items.length;
    const randomNumber = Math.floor(Math.random() * itemsLenght);
    const selectedItem = items[randomNumber];
    return selectedItem.src;
  }
  
  // Atribui ao HTML as imagens referentes aos objetos randomizados.
  slotItemOneElement.src = shufflee();
  slotItemTwoElement.src = shufflee();
  slotItemThreeElement.src = shufflee();

});
