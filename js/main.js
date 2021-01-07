// Buttons
const btn_newGame = document.querySelector('.newGame');
const btn_rollDice = document.querySelector('.rollDice');
const btn_hold = document.querySelector('.hold');

// Display elements
const scoreP1 = document.querySelector('.scoreP1');
const scoreP2 = document.querySelector('.scoreP2');

const currentP1 = document.querySelector('.currentP1');
const currentP2 = document.querySelector('.currentP2');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const dice = document.querySelector('.dice');

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
const overlay = document.querySelector('.overlay');

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

const dices = [
  {
    id: 1,
    dice: '<img src="img/dice-1.png" alt="">',
  },
  {
    id: 2,
    dice: '<img src="img/dice-2.png" alt="">',
  },
  {
    id: 3,
    dice: '<img src="img/dice-3.png" alt="">',
  },
  {
    id: 4,
    dice: '<img src="img/dice-4.png" alt="">',
  },
  {
    id: 5,
    dice: '<img src="img/dice-5.png" alt="">',
  },
  {
    id: 6,
    dice: '<img src="img/dice-6.png" alt="">',
  },
];

// Roll the dice
const rollIt = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// Variables
let currentScore = 0;
let heldScore = 0;
let value;
let bool = false;

// 'Roll Dice' events
btn_rollDice.addEventListener('click', function () {
  let variable = rollIt();

  for (let i = 0; i < dices.length; i++) {
    if (dices[i].id == variable) {
      value = dices[i].dice;
    }
  }
  dice.innerHTML = value;
  if (variable == 1) {
    currentScore = 0;
    bool
      ? (currentP1.textContent = currentScore)
      : (currentP2.textContent = currentScore);
    // toggle
    bool = !bool;
  } else {
    currentScore += variable;
  }

  bool
    ? (currentP1.textContent = currentScore)
    : (currentP2.textContent = currentScore);
  bool ? (left.style.opacity = '0.9') : (right.style.opacity = '0.9');
  bool ? (right.style.opacity = '0.6') : (left.style.opacity = '0.6');

  console.log(bool);
});

btn_hold.addEventListener('click', function () {
  heldScore += currentScore;
  bool
    ? (scoreP1.textContent = Number(scoreP1.textContent) + heldScore)
    : (scoreP2.textContent = Number(scoreP2.textContent) + heldScore);
  heldScore = 0;
  bool ? (currentP1.textContent = 0) : (currentP2.textContent = 0);
  currentScore = 0;
  // toggle
  bool = !bool;
  bool ? (left.style.opacity = '0.9') : (right.style.opacity = '0.9');
  bool ? (right.style.opacity = '0.6') : (left.style.opacity = '0.6');

  console.log(scoreP1.textContent, typeof Number(scoreP1.textContent));
  console.log(scoreP2, typeof scoreP2);

  if (scoreP1.textContent >= 100) {
    left.style.backgroundColor = '#a3ddcb';
    left.style.opacity = '0.9';
    right.style.backgroundColor = '#e5707e';
    btn_hold.disabled = true;
    btn_rollDice.disabled = true;
    btn_hold.style.opacity = '0.6';
    btn_rollDice.style.opacity = '0.6';
  } else if (scoreP2.textContent >= 100) {
    right.style.backgroundColor = '#a3ddcb';
    right.style.opacity = '0.9';
    left.style.backgroundColor = '#e5707e';
    btn_hold.disabled = true;
    btn_rollDice.disabled = true;
    btn_hold.style.opacity = '0.6';
    btn_rollDice.style.opacity = '0.6';
  } else {
    // btn_hold.disabled = true;
    // btn_rollDice.disabed = true;
    left.style.backgroundColor = 'rgb(255,255,255, 0.6)';
    right.style.backgroundColor = 'rgb(255,255,255, 0.6)';
    btn_hold.style.opacity = '0.6';
    btn_rollDice.style.opacity = '0.6';
  }
});

btn_newGame.addEventListener('click', function () {
  bool = true;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  currentP1.textContent = 0;
  currentP2.textContent = 0;
  currentScore = 0;
  heldScore = 0;

  btn_hold.disabled = false;
  btn_rollDice.disabled = false;
  left.style.backgroundColor = 'rgb(255,255,255, 0.6)';
  right.style.backgroundColor = 'rgb(255,255,255, 0.6)';
  btn_hold.style.opacity = '0.9';
  btn_rollDice.style.opacity = '0.9';
});
