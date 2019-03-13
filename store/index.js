export const state = () => {
  return {
    phrases: []
  };
};

export const mutations = {
  setPhrases: (state, { phrases }) => {
    state.phrases = phrases;
  }
};
