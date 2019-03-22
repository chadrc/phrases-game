<template>
  <section class="container">
    <h1 class="title has-text-centered">
      {{ titleText }}
    </h1>
    <section class="game-area">
      <game-word-display></game-word-display>
      <section v-show="currentGame">
        <div class="letter-buttons">
          <button
            v-for="letter of letters"
            :key="letter"
            class="button is-info is-large is-letter-button"
            :disabled="characterDisabled(letter)"
            @click="makeGuess({ guess: letter })"
          >
            {{ letter }}
          </button>
        </div>
      </section>
      <button
        class="button is-primary is-large is-fullwidth"
        @click="startGame()"
      >
        Start
      </button>
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GameService from "@/services/GameService";
import GameWordDisplay from "@/components/GameWordDisplay";

export default {
  components: { GameWordDisplay },
  computed: {
    ...mapGetters("game", ["currentGame"]),
    letters() {
      return GameService.alphabetLetters;
    },
    gameEnded() {
      return this.currentGame ? this.currentGame.won : false;
    },
    titleText() {
      return this.gameEnded ? "You Won!!" : "Guess the word";
    }
  },
  methods: {
    ...mapActions("game", ["startGame", "makeGuess"]),
    characterDisabled(letter) {
      if (this.gameEnded) {
        return true;
      }

      const chosen = this.currentGame ? this.currentGame.characterGuesses : [];
      return chosen.indexOf(letter) !== -1;
    }
  }
};
</script>

<style scoped>
.game-area {
  width: 75%;
  margin: auto;
}

.game-area > button {
  margin-top: 3rem;
}

.letter-buttons {
  text-align: center;
}

.is-letter-button {
  margin: .25em;
  width: 3em;
  height: 3em;
}
</style>
