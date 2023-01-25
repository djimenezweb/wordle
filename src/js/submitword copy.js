let currentRow = 0;

const submitWord = (word, secretWord) => {
  for (let index = 0; index < word.length; index++) {
    gameBoard.children[currentRow].children[index].textContent = word.charAt(index);
    if (word.charAt(index) === secretWord.charAt(index)) {
      gameBoard.children[currentRow].children[index].classList.add('game-board__box--correct');
    } else if (secretWord.includes(word.charAt(index)) && word.charAt(index) !== secretWord.charAt(index)) {
      gameBoard.children[currentRow].children[index].classList.add('game-board__box--included');
    } else {
      gameBoard.children[currentRow].children[index].classList.add('game-board__box--not-included');
    }
  }
  currentRow++;
};
export { submitWord };
