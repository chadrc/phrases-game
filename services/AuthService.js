import uuid from "uuid/v4";
import _ from "lodash";

export default class AuthService {
  _accounts = {};
  _currentAccountUsername = null;
  _currentAccessToken = null;
  _storage = null;

  constructor(storage) {
    if (storage) {
      this._storage = storage;
      const accounts = storage.getItem("accounts");
      if (accounts) {
        this._accounts = JSON.parse(accounts);
      }

      const currentUser = storage.getItem("currentUser");
      if (currentUser) {
        this._currentAccountUsername = currentUser;
        this._currentAccessToken = uuid();
      }
    }
  }

  get currentAccessToken() {
    return this._currentAccessToken;
  }

  verifyAccess({ accessToken }) {
    const account = _.chain(this._accounts)
      .values()
      .find((account) => account.accessToken === accessToken)
      .value();

    if (!account) {
      return Promise.resolve({
        error: {
          message: "No Access"
        }
      });
    }

    return Promise.resolve(_.cloneDeep(account));
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

    const accessToken = uuid();
    this._currentAccessToken = accessToken;

    const account = {
      id: uuid(),
      accessToken,
      username
    };

    this._currentAccountUsername = username;
    this._accounts[username] = account;

    if (this._storage) {
      this._storage.setItem("accessToken", accessToken);
      this._storage.setItem("accounts", JSON.stringify(this._accounts));
      this._storage.setItem("currentUser", username);
    }

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

    if (this._storage) {
      this._storage.removeItem("currentUser");
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
