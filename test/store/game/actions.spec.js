import { makeActions } from "@/store/game";
import { testAction } from "@/test/store/utils";

const actions = makeActions({
  startGame: () => {
    return Promise.resolve({
      id: "123",
      word: "Some Word",
      characterGuesses: [],
      wordGuesses: []
    });
  }
});

describe("Game Actions", () => {
  test("startGame - Success", (done) => {
    testAction(
      actions.startGame,
      null,
      {},
      [
        { type: "setSendingStartGame", payload: true },
        {
          type: "setCurrentGame", payload: {
            id: "123",
            word: "Some Word",
            characterGuesses: [],
            wordGuesses: []
          }
        },
        { type: "setSendingStartGame", payload: false }
      ],
      done
    );
  });

  test("startGame - Error", (done) => {
    const actions = makeActions({
      startGame: () => {
        return Promise.resolve({
          error: {
            message: "Some Error"
          }
        });
      }
    });

    testAction(
      actions.startGame,
      null,
      {},
      [
        { type: "setSendingStartGame", payload: true },
        {
          type: "setStartGameError", payload: {
            error: {
              message: "Some Error"
            }
          }
        },
        { type: "setSendingStartGame", payload: false }
      ],
      done
    );
  });
});
