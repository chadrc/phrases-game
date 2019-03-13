import * as GameService from "@/services/GameService";

export const state = () => {
  return {
    currentGame: null
  };
};

export const mutations = {
  setGame: (state, game) => {
    state.currentGame = game;
  }
};

export const actions = {
  startNewGame: async ({ commit }) => {
    const game = await GameService.startGame();
    commit("setGame", game);
  }
};
