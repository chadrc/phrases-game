import uuid from "uuid/v4";

export const signUp = ({ username, password }) => {
  return Promise.resolve({
    id: uuid(),
    username
  });
};
