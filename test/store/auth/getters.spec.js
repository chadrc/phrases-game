import { getters } from "@/store/auth";

describe("Auth Getters", () => {
  test("signing up", () => {
    const state = { signingUp: true };
    expect(getters.signingUp(state)).toBe(true);
  });
});
