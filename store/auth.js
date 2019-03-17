import * as AuthService from "@/services/AuthService";

export const state = () => ({
  signingUp: false,
  signingIn: false,
  sendingSignUp: false,
  sendingSignOut: false,
  currentUser: null,
  signUpError: null,
  signOutError: null
});

export const getters = {
  signingUp: state => state.signingUp,
  signingIn: state => state.signingIn,
  sendingSignUp: state => state.sendingSignUp,
  sendingSignOut: state => state.sendingSignOut,
  currentUser: state => state.currentUser,
  signOutError: state => {
    if (state.signOutError) {
      return state.signOutError.error.message;
    }

    return "";
  },
  signUpError: state => {
    if (state.signUpError) {
      return state.signUpError.error.message;
    }

    return "";
  }
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
  },
  setSendingSignOut: (state, val) => {
    state.sendingSignOut = val;
  },
  setSignOutError: (state, error) => {
    state.signOutError = error;
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
      // clear error if we have one
      commit("setSignUpError", null);

      // waiting for sign up response flag
      commit("setSendingSignUp", true);

      const signUpResponse = await authService.signUp({ username, password });

      // set error if present
      if (signUpResponse.error) {
        commit("setSignUpError", signUpResponse);
      } else {
        // otherwise set user and end sign up proccess
        commit("setCurrentUser", signUpResponse);
        commit("setSigningUp", false);
      }

      // no longer waiting for response
      commit("setSendingSignUp", false);
    },
    submitSignOut: async ({ commit, state }) => {
      if (!state.currentUser) {
        return;
      }

      commit("setSendingSignOut", true);

      const signOutResponse = await authService.signOut({
        accessToken: state.currentUser.accessToken
      });

      if (signOutResponse.error) {
        commit("setSignOutError", signOutResponse);
      } else {
        commit("setCurrentUser", null);
      }

      commit("setSendingSignOut", false);
    }
  };
};

export const actions = makeActions(AuthService);
