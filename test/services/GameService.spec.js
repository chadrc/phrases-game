import * as GameService from "@/services/GameService";

describe("GameService", () => {
  test("startGame", async () => {
    const startGameResponse = await GameService.startGame();

    expect(startGameResponse.id).toBeTruthy();
    expect(startGameResponse.word).toBeTruthy();
    expect(startGameResponse.characterGuesses).toEqual([]);
    expect(startGameResponse.wordGuesses).toEqual([]);
  });
});
