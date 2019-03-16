import uuid from "uuid/v4";

export const signUp = ({ username, password }) => {
  if (password === "password") {
    return Promise.resolve({
      error: {
        message: "Invalid Password"
      }
    });
  }

  return Promise.resolve({
    id: uuid(),
    username
  });
};
