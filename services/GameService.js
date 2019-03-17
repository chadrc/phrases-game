import uuid from "uuid/v4";

export default class GameService {
  _games = {};
  _authService = null;

  constructor(authService) {
    this._authService = authService;
  }

  startGame() {
    if (!this._authService.currentAccessToken) {
      return Promise.resolve({
        error: {
          message: "log in to start a game"
        }
      });
    }

    const newGame = {
      id: uuid(),
      word: "Polar Bear",
      characterGuesses: [],
      wordGuesses: []
    };

    this._games[newGame.id] = newGame;

    const responseGame = {
      ...newGame,
      word: newGame.word.replace(/[a-zA-Z]/g, "_")
    };

    return Promise.resolve(responseGame);
  }
}
