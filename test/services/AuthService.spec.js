import AuthService from "@/services/AuthService";

describe("AuthService", () => {
  test("signUp - Success", done => {
    const authService = new AuthService();
    authService
      .signUp({ username: "PandaBear", password: "bamboo123" })
      .then(response => {
        expect(response.id).toBeTruthy();
        expect(response.username).toEqual("PandaBear");
        done();
      });
  });

  test("access token after sign up", async () => {
    const authService = new AuthService();

    expect(authService.currentAccessToken).toBeNull();

    await authService.signUp({ username: "PandaBear", password: "bamboo123" });

    expect(authService.currentAccessToken).toBeTruthy();
  });

  test("signUp - Invalid password", done => {
    const authService = new AuthService();

    authService
      .signUp({ username: "PandaBear", password: "password" })
      .then(response => {
        expect(response.error.message).toEqual("Invalid Password");
        done();
      });
  });

  test("signUp - No username", done => {
    const authService = new AuthService();

    authService.signUp({ password: "password" }).then(response => {
      expect(response.error.message).toEqual("username required");
      done();
    });
  });

  test("signUp - No password", done => {
    const authService = new AuthService();

    authService.signUp({ username: "PandaBear" }).then(response => {
      expect(response.error.message).toEqual("password required");
      done();
    });
  });

  test("signOut", done => {
    const authService = new AuthService();

    authService
      .signUp({ username: "PandaBear", password: "bamboo123" })
      .then(() => {
        authService.signOut().then(() => {
          done();
        });
      });
  });

  test("signOut - before signUp/signIn", done => {
    const authService = new AuthService();

    authService.signOut({}).then(response => {
      expect(response.error.message).toEqual("not currently logged in");
      done();
    });
  });

  test("signIn - Before sign up", done => {
    const authService = new AuthService();

    authService
      .signIn({ username: "PolarBear", password: "bamboo123" })
      .then(response => {
        expect(response.error.message).toEqual("account does not exist");
        done();
      });
  });

  test("signIn - Success", done => {
    const authService = new AuthService();

    authService
      .signUp({ username: "PandaBear", password: "bamboo123" })
      .then(signUpResponse => {
        const id = signUpResponse.id;

        authService
          .signOut({ accessToken: signUpResponse.accessToken })
          .then(() => {
            authService
              .signIn({
                username: "PandaBear",
                password: "bamboo123"
              })
              .then(response => {
                expect(response.id).toEqual(id);
                expect(response.username).toEqual("PandaBear");
                done();
              });
          });
      });
  });

  test("signIn - No username", done => {
    const authService = new AuthService();

    authService
      .signIn({
        password: "bamboo123"
      })
      .then(response => {
        expect(response.error.message).toEqual("username required");
        done();
      });
  });

  test("signIn - No password", done => {
    const authService = new AuthService();

    authService
      .signIn({
        username: "PandaBear"
      })
      .then(response => {
        expect(response.error.message).toEqual("password required");
        done();
      });
  });
});
