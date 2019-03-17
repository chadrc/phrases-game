import GameService from "@/services/GameService";

describe("GameService", () => {
  test("startGame", async () => {
    const gameService = new GameService({
      get currentAccessToken() {
        return "123";
      }
    });

    const startGameResponse = await gameService.startGame();

    expect(startGameResponse.id).toBeTruthy();
    expect(startGameResponse.word).toBeTruthy();
    expect(startGameResponse.characterGuesses).toEqual([]);
    expect(startGameResponse.wordGuesses).toEqual([]);
  });

  test("startGame - no access", async () => {
    const gameService = new GameService({});

    const startGameResponse = await gameService.startGame();

    expect(startGameResponse.error.message).toEqual("log in to start a game");
  });
});
