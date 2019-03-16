import { actions } from "@/store/auth";
import { testAction } from "@/test/store/utils";

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
          type: "setSignUp",
          payload: payload => {
            expect(payload.id).toBeTruthy();
            expect(payload.username).toEqual("PandaBear");
          }
        }
      ],
      done
    );
  });
});
