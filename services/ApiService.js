import axios from "axios";

export default class ApiService {
  async getWords() {
    const response = await axios.get("/words_phrases.json");
    return response.data;
  }
}
