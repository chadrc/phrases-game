import * as AuthService from "@/services/AuthService";

describe("AuthService", () => {
  test("signUp - Success", done => {
    AuthService.signUp({ username: "PandaBear", password: "bamboo123" }).then(
      response => {
        expect(response.id).toBeTruthy();
        expect(response.accessToken).toBeTruthy();
        expect(response.username).toEqual("PandaBear");
        done();
      }
    );
  });

  test("signUp - Invalid password", done => {
    AuthService.signUp({ username: "PandaBear", password: "password" }).then(
      response => {
        expect(response.error.message).toEqual("Invalid Password");
        done();
      }
    );
  });

  test("signUp - No username", done => {
    AuthService.signUp({ password: "password" }).then(response => {
      expect(response.error.message).toEqual("username required");
      done();
    });
  });

  test("signUp - No password", done => {
    AuthService.signUp({ username: "PandaBear" }).then(response => {
      expect(response.error.message).toEqual("password required");
      done();
    });
  });

  test("signOut", done => {
    AuthService.signUp({ username: "PandaBear", password: "bamboo123" }).then(
      response => {
        AuthService.signOut({ accessToken: response.accessToken }).then(
          response => {
            done();
          }
        );
      }
    );
  });

  test("signOut - no access token", done => {
    AuthService.signOut({}).then(response => {
      expect(response.error.message).toEqual("access token required");
      done();
    });
  });
});
