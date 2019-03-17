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

  test("sendingSignOut", () => {
    expect(getters.sendingSignOut(state)).toBe(false);
  });

  test("currentUser", () => {
    expect(getters.currentUser(state)).toBeNull();
  });

  test("signUpError - default", () => {
    expect(getters.signUpError(state)).toEqual("");
  });

  test("signUpError - exists", () => {
    const state = {
      signUpError: {
        error: {
          message: "Some error"
        }
      }
    };

    expect(getters.signUpError(state)).toEqual("Some error");
  });

  test("signOutError - default", () => {
    expect(getters.signOutError(state)).toEqual("");
  });

  test("signOutError - exists", () => {
    const state = {
      signOutError: {
        error: {
          message: "Some error"
        }
      }
    };

    expect(getters.signOutError(state)).toEqual("Some error");
  });
});
