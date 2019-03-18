import GameService from "@/services/GameService";

const gameServiceWithAccess = () => {
  return new GameService({
    get currentAccessToken() {
      return "123";
    }
  });
};

describe("GameService", () => {
  test("startGame", async () => {
    const gameService = gameServiceWithAccess();

    const startGameResponse = await gameService.startGame();

    expect(startGameResponse.id).toBeTruthy();
    expect(startGameResponse.word).toEqual("_____ ____");
    expect(startGameResponse.characterGuesses).toEqual([]);
    expect(startGameResponse.wordGuesses).toEqual([]);
  });

  test("startGame - no access", async () => {
    const gameService = new GameService({});

    const startGameResponse = await gameService.startGame();

    expect(startGameResponse.error.message).toEqual("log in to start a game");
  });

  test("makeGuess - correct", async () => {
    const gameService = gameServiceWithAccess();

    const { id } = await gameService.startGame();

    const guessResponse = await gameService.makeGuess({
      gameId: id,
      guess: "b"
    });

    expect(guessResponse.id).toBeTruthy();
    expect(guessResponse.word).toEqual("_____ B___");
    expect(guessResponse.characterGuesses).toEqual(["b"]);
    expect(guessResponse.wordGuesses).toEqual([]);
  });
});
