import { mutations } from "@/store/auth";

describe("Auth Mutations", () => {
  test("setSigningUp", () => {
    const state = { signingUp: true };
    mutations.setSigningUp(state, false);

    expect(state.signingUp).toBe(false);

    mutations.setSigningUp(state, true);

    expect(state.signingUp).toBe(true);
  });

  test("setSigningIn", () => {
    const state = { signingIn: true };
    mutations.setSigningIn(state, false);

    expect(state.signingIn).toBe(false);

    mutations.setSigningIn(state, true);

    expect(state.signingIn).toBe(true);
  });

  test("setSendingSignUp", () => {
    const state = { sendingSignUp: false };
    mutations.setSendingSignUp(state, true);

    expect(state.sendingSignUp).toBe(true);

    mutations.setSendingSignUp(state, false);

    expect(state.sendingSignUp).toBe(false);
  });
});
