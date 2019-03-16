import { accessSync } from "fs";
import uuid from "uuid/v4";

const accounts = {};

export const signUp = ({ username, password }) => {
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

  const account = {
    id: uuid(),
    accessToken: uuid(),
    username
  };

  accounts[account.username] = account;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(account);
    }, 1000);
  });
};

export const signOut = ({ accessToken }) => {
  if (!accessToken) {
    return Promise.resolve({
      error: {
        message: "access token required"
      }
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, 500);
  });
};

export const signIn = ({ username, password }) => {
  if (!accounts[username]) {
    return Promise.resolve({
      error: {
        message: "account does not exist"
      }
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(accounts[username]);
    }, 500);
  });
};
