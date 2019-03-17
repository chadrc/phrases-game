import GameService from "@/services/GameService";

describe("GameService", () => {
  test("startGame", async () => {
    const gameService = new GameService();

    const startGameResponse = await gameService.startGame();

    expect(startGameResponse.id).toBeTruthy();
    expect(startGameResponse.word).toBeTruthy();
    expect(startGameResponse.characterGuesses).toEqual([]);
    expect(startGameResponse.wordGuesses).toEqual([]);
  });
});
