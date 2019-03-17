import uuid from "uuid/v4";

export default class GameService {
  _games = {};

  startGame() {
    const newGame = {
      id: uuid(),
      word: "Hello",
      characterGuesses: [],
      wordGuesses: []
    };

    this._games[newGame.id] = newGame;

    return Promise.resolve(newGame);
  }
}
