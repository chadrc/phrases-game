import uuid from "uuid/v4";

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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: uuid(),
        username
      });
    }, 1000);
  });
};
