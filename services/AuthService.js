import uuid from "uuid/v4";

export default class AuthService {
  _accounts = {};
  _currentAccountUsername = null;
  _currentAccessToken = null;

  get currentAccessToken() {
    return this._currentAccessToken;
  }

  signUp({ username, password }) {
    if (!username) {
      return Promise.resolve({
        error: {
          message: "username required"
        }
      });
    }

    if (!password) {
      return Promise.resolve({
        error: {
          message: "password required"
        }
      });
    }

    if (password === "password") {
      return Promise.resolve({
        error: {
          message: "Invalid Password"
        }
      });
    }

    this._currentAccessToken = uuid();

    const account = {
      id: uuid(),
      username
    };

    this._currentAccountUsername = username;
    this._accounts[username] = account;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(account);
      }, 1000);
    });
  }

  signOut() {
    if (!this._currentAccessToken) {
      return Promise.resolve({
        error: {
          message: "not currently logged in"
        }
      });
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({});
      }, 500);
    });
  }

  signIn({ username, password }) {
    if (!username) {
      return Promise.resolve({
        error: {
          message: "username required"
        }
      });
    }

    if (!password) {
      return Promise.resolve({
        error: {
          message: "password required"
        }
      });
    }

    if (!this._accounts[username]) {
      return Promise.resolve({
        error: {
          message: "account does not exist"
        }
      });
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this._accounts[username]);
      }, 500);
    });
  }
}
