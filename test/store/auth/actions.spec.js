import { makeActions } from "@/store/auth";
import { testAction } from "@/test/store/utils";

const actions = makeActions({
  signUp: ({ username, password }) => {
    return Promise.resolve({
      id: "123",
      username
    });
  }
});

describe("Auth Actions", () => {
  test("startSignUp", done => {
    testAction(
      actions.startSignUp,
      null,
      {},
      [{ type: "setSigningUp", payload: true }],
      done
    );
  });

  test("endSignUp", done => {
    testAction(
      actions.endSignUp,
      null,
      {},
      [{ type: "setSigningUp", payload: false }],
      done
    );
  });

  test("startSignIn", done => {
    testAction(
      actions.startSignIn,
      null,
      {},
      [{ type: "setSigningIn", payload: true }],
      done
    );
  });

  test("endSignIn", done => {
    testAction(
      actions.endSignIn,
      null,
      {},
      [{ type: "setSigningIn", payload: false }],
      done
    );
  });

  test("submitSignUp - Success", done => {
    testAction(
      actions.submitSignUp,
      { username: "PandaBear", password: "bamboo123" },
      {},
      [
        { type: "setSendingSignUp", payload: true },
        {
          type: "setCurrentUser",
          payload: { id: "123", username: "PandaBear" }
        }
      ],
      done
    );
  });

  test("submitSignUp - Error", done => {
    const actions = makeActions({
      signUp: ({ username, password }) => {
        return Promise.resolve({
          error: {
            message: "Invalid password"
          }
        });
      }
    });

    testAction(
      actions.submitSignUp,
      { username: "PandaBear", password: "bamboo123" },
      {},
      [
        { type: "setSendingSignUp", payload: true },
        {
          type: "setSignUpError",
          payload: { error: { message: "Invalid password" } }
        }
      ],
      done
    );
  });
});
