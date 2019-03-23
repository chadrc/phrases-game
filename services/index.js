import AuthService from "./AuthService";
import GameService from "./GameService";

export const authService = new AuthService(process.browser ? localStorage : null);
export const gameService = new GameService(authService);
