export const state = () => ({
  signingUp: false
});

export const getters = {
  signingUp: state => {
    return state.signingUp;
  }
};

export const mutations = {
  setSigningUp: (state, val) => {
    state.signingUp = val;
  }
};

export const actions = {
  startSignUp: ({ commit }) => {
    commit("setSigningUp", true);
  },
  endSignUp: ({ commit }) => {
    commit("setSigningUp", false);
  }
};
