import { dictionary } from './constants.js';

const randomWord = () => {
  return dictionary[Math.floor(Math.random() * (dictionary.length + 1))];
};

export { randomWord };
