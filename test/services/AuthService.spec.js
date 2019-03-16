import * as AuthService from "@/services/AuthService";

describe("AuthService", () => {
  test("signUp - Success", done => {
    AuthService.signUp({ username: "PandaBear", password: "bamboo123" }).then(
      response => {
        expect(response.id).toBeTruthy();
        expect(response.username).toEqual("PandaBear");
        done();
      }
    );
  });
});
