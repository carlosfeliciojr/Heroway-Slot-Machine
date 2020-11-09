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

// Função responsável por alterar o saldo.
function createBalance(initialValue) {
  let balance = initialValue;
  const transactions = [];

  function getBalance() {
    console.log(`O saldo é de ${balance}`);
    return balance;
  }

  function add(numberToAdd) {
    transactions.push(`foi adicionado ${numberToAdd}`);
    balance = balance + numberToAdd;
  }

  function sub(numberToSub) {
    transactions.push(`foi retirado ${numberToSub}`);
    balance = balance - numberToSub;
  }

  return {
    add: add,
    sub: sub,
    getBalance: getBalance,
    transactions: transactions,
    initialValue: initialValue,
  }
}

// Define no HTML o valor disponível para apostar.
const balanceElement = document.getElementById('balance');
const myBalance = createBalance(availableToBet);
balanceElement.innerHTML = availableToBet;

// Define a ação ao clicar no botão SPIN.
const spinButtonElement = document.getElementById('spin-button');
spinButtonElement.addEventListener('click', () => {
  const slotItemOneElement = document.getElementById('slot-item-1');
  const slotItemTwoElement = document.getElementById('slot-item-2');
  const slotItemThreeElement = document.getElementById('slot-item-3');

  // Captura o title.
  const titleElement = document.getElementById('title');

  // Verifica se o saldo é maior que 0.
  const getInitialBalance = myBalance.getBalance();
  if (getInitialBalance <= 0) {
    return;
  }

  // A cada click consome 10.
  myBalance.sub(10);
  balanceElement.innerText = myBalance.getBalance();

  // Atribui as imagens referentes aos objetos randomizados.
  const resultShuffleOne = shuffle(slotItemOneElement, 20);
  const resultShuffleTwo = shuffle(slotItemTwoElement, 40);
  const resultShuffleThree = shuffle(slotItemThreeElement, 60);

  // // Exibe as imagens no HTML.
  // slotItemOneElement.src = resultShuffleOne.src;
  // slotItemTwoElement.src = resultShuffleTwo.src;
  // slotItemThreeElement.src = resultShuffleThree.src;

  // Compara se todos os objetos são iguais.
  // if (
  //   resultShuffleOne.id === resultShuffleTwo.id &&
  //   resultShuffleTwo.id === resultShuffleThree.id
  // ) {
  //   // Adiciona dinheiro caso sejam iguais.
  //   myBalance.add(resultShuffleOne.reward);
  //   balanceElement.innerText = myBalance.getBalance();
  //   changeTitle(resultShuffleOne);
  // }

  // desabilita o botão se o saldo for menor que zero.
  const getFinalBalance = myBalance.getBalance();
  if (getFinalBalance <= 0) {
    spinButtonElement.disable = true;
  }

  // Método que randomiza o objeto que será exibido em cada slot.
  function shuffle(slotItemElement, iterations) {

    for (let i = 0; i <= iterations; i++) {
      setTimeout(() => {
        const itemsLenght = items.length;
        const randomNumber = Math.floor(Math.random() * itemsLenght);
        const selectedItem = items[randomNumber];
        slotItemElement.src = selectedItem.src;
      }, 100 * i);
    }
  }

  // Muda o title.
  function changeTitle(item) {
    const originalText = titleElement.innerText;

    if (item.reward > 0) {
      titleElement.innerText = `Parabens! Você ganhou: ${item.reward}!`;
    } else {
      titleElement.innerText = `Ops, você perdeu: ${item.reward}!`;
    }

    setTimeout(() => {
      titleElement.innerText = originalText;
    }, 3000)
  }
});