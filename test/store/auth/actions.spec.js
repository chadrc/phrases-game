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
});