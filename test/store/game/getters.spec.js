import {getters, state as stateFunc} from "@/store/game";

describe("Game Getters", () => {
  const state = stateFunc();

  test("sendingStartGame", () => {
    expect(getters.sendingStartGame(state)).toEqual(false);
  });

  test("sendingStartGameError", () => {
    expect(getters.sendingStartGameError(state)).toBeNull();
  });

  test("currentGame", () => {
    expect(getters.currentGame(state)).toBeNull();
  });
});
