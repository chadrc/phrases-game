import { getters, state as stateFunc } from "@/store/auth";

describe("Auth Getters", () => {
  const state = stateFunc();

  test("signing up", () => {
    expect(getters.signingUp(state)).toBe(false);
  });

  test("signing in", () => {
    expect(getters.signingIn(state)).toBe(false);
  });

  test("sendingSignUp", () => {
    expect(getters.sendingSignUp(state)).toBe(false);
  });

  test("currentUser", () => {
    expect(getters.currentUser(state)).toBeNull();
  });

  test("signUpError", () => {
    expect(getters.signUpError(state)).toBeNull();
  });
});
