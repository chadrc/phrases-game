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
});
