import GameService from "@/services/GameService";

export const state = () => ({
  sendingStartGame: false,
  startGameError: null,
  currentGame: null
});

export const getters = {
  sendingStartGame: (state) => state.sendingStartGame,
  startGameError: (state) => state.startGameError,
  currentGame: (state) => state.currentGame
};

export const mutations = {
  setSendingStartGame: (state, val) => {
    state.sendingStartGame = val;
  },
  setStartGameError: (state, error) => {
    state.startGameError = error;
  },
  setCurrentGame: (state, game) => {
    state.currentGame = game;
  }
};

export const makeActions = gameService => {
  return {
    startGame: async ({ commit }) => {
      commit("setSendingStartGame", true);

      const startGameResponse = await gameService.startGame();

      if (startGameResponse.error) {
        commit("setStartGameError", startGameResponse);
      } else {
        commit("setCurrentGame", startGameResponse);
      }

      commit("setSendingStartGame", false);
    },
  };
};

export const actions = makeActions(new GameService());
