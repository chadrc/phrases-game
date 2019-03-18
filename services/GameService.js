import uuid from "uuid/v4";

export default class GameService {
  _games = {};
  _authService = null;

  constructor(authService) {
    this._authService = authService;
  }

  withAuth(then) {
    if (!this._authService.currentAccessToken) {
      return Promise.resolve({
        error: {
          message: "log in to start a game"
        }
      });
    }

    return then();
  }

  startGame() {
    return this.withAuth(() => {
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
    });
  }

  makeGuess({ gameId, guess }) {
    return this.withAuth(() => {
      const game = this._games[gameId];

      if (guess.length === 1) {
        // character guess
        game.characterGuesses.push(guess.toLowerCase());

        const characters = game.word.split("");

        for (let i = 0; i < characters.length; i++) {
          const c = characters[i];

          // skip non alpha
          if (!c.match(/[a-zA-Z]/)) {
            continue;
          }

          if (game.characterGuesses.indexOf(c.toLowerCase()) === -1) {
            // haven't guessed charcter
            // redact from returned word
            characters[i] = "_";
          }
        }

        return Promise.resolve({
          ...game,
          word: characters.join("")
        });
      } else {
        // word guess
        game.wordGuesses.push(guess);

        if (game.word.toLowerCase() === guess.toLowerCase()) {
          return Promise.resolve({
            ...game
          });
        }
      }
    });
  }
}
