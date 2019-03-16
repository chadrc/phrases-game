import * as GameService from "@/services/GameService";

describe("GameService", () => {
  test("startGame", done => {
    GameService.startGame().then(game => {
      expect(game.id).toBeTruthy();
      expect(game.word).toBeTruthy();
      expect(game.characterGuesses).toEqual([]);
      expect(game.wordGuesses).toEqual([]);
    });
  });
});
