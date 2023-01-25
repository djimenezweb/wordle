import '../scss/styles.scss';
import { createRow } from './gameboard.js';
import { randomWord } from './secretword';
import { submitWord } from './submitword.js';

const wordleForm = document.getElementById('wordleForm');
const gameBoard = document.getElementById('gameBoard');
createRow();

const secretWord = randomWord();
console.log(secretWord);

wordleForm.addEventListener('submit', e => {
  e.preventDefault();
  submitWord(e.target.wordInput.value, secretWord, gameBoard);
});
