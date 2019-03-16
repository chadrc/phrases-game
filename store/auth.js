export const state = () => ({
  signingUp: false,
  signingIn: false
});

export const getters = {
  signingUp: state => {
    return state.signingUp;
  },
  signingIn: state => {
    return state.signingIn;
  }
};

export const mutations = {
  setSigningUp: (state, val) => {
    state.signingUp = val;
  },
  setSigningIn: (state, val) => {
    state.signingIn = val;
  }
};

export const actions = {
  startSignUp: ({ commit }) => {
    commit("setSigningUp", true);
  },
  endSignUp: ({ commit }) => {
    commit("setSigningUp", false);
  },
  startSignIn: ({ commit }) => {
    commit("setSigningIn", true);
  },
  endSignIn: ({ commit }) => {
    commit("setSigningIn", false);
  }
};
