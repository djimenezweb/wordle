import { wordLength, gameTries } from './constants.js';

const createRow = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < gameTries; index++) {
    const row = document.createElement('div');
    row.classList.add('game-board__row');

    for (let index = 0; index < wordLength; index++) {
      const letterBox = document.createElement('div');
      letterBox.classList.add('game-board__box');
      row.append(letterBox);
    }

    fragment.append(row);
  }
  gameBoard.prepend(fragment);
};

export { createRow };
