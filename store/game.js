import GameService from "@/services/GameService";

export const state = () => ({
  sendingStartGame: false,
  sendingStartGameError: null,
  currentGame: null
});

export const getters = {
  sendingStartGame: (state) => state.sendingStartGame,
  sendingStartGameError: (state) => state.sendingStartGameError,
  currentGame: (state) => state.currentGame
};

export const mutations = {};

export const makeActions = gameService => {
  return {};
};

export const actions = makeActions(new GameService());
