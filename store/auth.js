import * as AuthService from "@/services/AuthService";

export const state = () => ({
  signingUp: false,
  signingIn: false,
  sendingSignUp: false,
  currentUser: null,
  signUpError: null
});

export const getters = {
  signingUp: state => state.signingUp,
  signingIn: state => state.signingIn,
  sendingSignUp: state => state.sendingSignUp,
  currentUser: state => state.currentUser,
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
  setCurrentUser: (state, user) => {
    state.currentUser = user;
  },
  setSignUpError: (state, error) => {
    state.signUpError = error;
  }
};

export const makeActions = authService => {
  return {
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
    },
    submitSignUp: async ({ commit }, { username, password }) => {
      commit("setSendingSignUp", true);
      const signUpResponse = await authService.signUp({ username, password });
      if (signUpResponse.error) {
        commit("setSignUpError", signUpResponse);
      } else {
        commit("setCurrentUser", signUpResponse);
      }
    }
  };
};

export const actions = makeActions(AuthService);
