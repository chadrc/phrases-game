import { mutations } from "@/store/auth";

describe("Auth Mutations", () => {
  test("set sign up", () => {
    const state = { signingUp: true };
    mutations.setSigningUp(state, false);

    expect(state.signingUp).toBe(false);

    mutations.setSigningUp(state, true);

    expect(state.signingUp).toBe(true);
  });
});
