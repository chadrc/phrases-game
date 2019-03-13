import uuid from "uuid/v4";

const games = {};

export const startGame = () => {
  const newGame = {
    id: uuid(),
    word: "Hello",
    characterGuesses: [],
    wordGuesses: []
  };

  games[newGame.id] = newGame;

  return Promise.resolve(newGame);
};
