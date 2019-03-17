import { makeActions } from "@/store/auth";
import { testAction } from "@/test/store/utils";

const actions = makeActions({
  signUp: ({ username, password }) => {
    return Promise.resolve({
      id: "123",
      accessToken: "987",
      username
    });
  },
  signOut: ({ accessToken }) => {
    if (!accessToken) {
      return Promise.resolve({
        error: {
          message: "access token required"
        }
      });
    }
    return Promise.resolve({});
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
        {
          type: "setSignUpError",
          payload: null
        },
        { type: "setSendingSignUp", payload: true },
        {
          type: "setCurrentUser",
          payload: { id: "123", username: "PandaBear", accessToken: "987" }
        },
        { type: "setSigningUp", payload: false },
        { type: "setSendingSignUp", payload: false }
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
        {
          type: "setSignUpError",
          payload: null
        },
        { type: "setSendingSignUp", payload: true },
        {
          type: "setSignUpError",
          payload: { error: { message: "Invalid password" } }
        },
        { type: "setSendingSignUp", payload: false }
      ],
      done
    );
  });

  test("signOut - Success", done => {
    testAction(
      actions.submitSignOut,
      {},
      { currentUser: { accessToken: "123" } },
      [
        { type: "setSendingSignOut", payload: true },
        {
          type: "setCurrentUser",
          payload: null
        },
        { type: "setSendingSignOut", payload: false }
      ],
      done
    );
  });

  test("signOut - No current user", done => {
    testAction(actions.submitSignOut, {}, {}, [], done);
  });

  test("signOut - General error", done => {
    const actions = makeActions({
      signOut: () => {
        return Promise.resolve({
          error: {
            message: "access token required"
          }
        });
      }
    });

    testAction(
      actions.submitSignOut,
      {},
      { currentUser: { accessToken: "123" } },
      [
        { type: "setSendingSignOut", payload: true },
        {
          type: "setSignOutError",
          payload: {
            error: {
              message: "access token required"
            }
          }
        },
        { type: "setSendingSignOut", payload: false }
      ],
      done
    );
  });
});
