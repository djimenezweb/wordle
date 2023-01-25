let currentRow = 0;

const submitWord = (word, secretWord, gameBoard) => {
  let wordToCheck = '';
  for (let index = 0; index < word.length; index++) {
    if (word[index] === secretWord[index]) {
      gameBoard.children[currentRow].children[index].textContent = word[index];
      gameBoard.children[currentRow].children[index].classList.add('game-board__box--correct');
    } else {
      wordToCheck += secretWord[index];
    }
  }
  for (let index = 0; index < word.length; index++) {
    if (wordToCheck.includes(word[index])) {
      gameBoard.children[currentRow].children[index].textContent = word[index];
      if (gameBoard.children[currentRow].children[index].classList.contains('game-board__box--correct')) return;
      gameBoard.children[currentRow].children[index].classList.add('game-board__box--included');
    } else {
      gameBoard.children[currentRow].children[index].textContent = word[index];
      gameBoard.children[currentRow].children[index].classList.add('game-board__box--not-included');
    }
  }
  currentRow++;
};
export { submitWord };
