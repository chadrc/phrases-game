export const state = () => ({
  signingUp: false,
  signingIn: false,
  sendingSignUp: false,
  signUpResult: null,
  signUpError: null
});

export const getters = {
  signingUp: state => state.signingUp,
  signingIn: state => state.signingIn,
  sendingSignUp: state => state.sendingSignUp,
  signUpResult: state => state.signUpResult,
  signUpError: state => state.signUpError
};

export const mutations = {
  setSigningUp: (state, val) => {
    state.signingUp = val;
  },
  setSigningIn: (state, val) => {
    state.signingIn = val;
  },
  setSendingSignUp: (state, val) => {
    state.sendingSignUp = val;
  },
  setSignUp: (state, result) => {
    if (result.error) {
      state.signUpError = result;
    } else {
      state.signUpResult = result;
    }
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
