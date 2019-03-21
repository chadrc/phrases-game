<template>
  <section class="container">
    <h1 class="title has-text-centered">
      Play
    </h1>
    <section class="game-area">
      <game-word-display></game-word-display>
      <button
        v-show="!currentGame"
        class="button is-primary is-large is-fullwidth"
        @click="startGame()"
      >
        New Game
      </button>
      <section v-show="currentGame">
        <button class="button is-info is-small"
                v-for="letter of letters"
                :key="letter"
                :disabled="letterChosen(letter)"
                @click="makeGuess({guess: letter})"
        >
          {{ letter }}
        </button>
      </section>
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
    }
  },
  methods: {
    ...mapActions("game", ["startGame", "makeGuess"]),
    letterChosen(letter) {
      const chosen = this.currentGame ? this.currentGame.characterGuesses : [];
      return chosen.indexOf(letter) !== -1;
    }
  }
};
</script>

<style scoped>
.game-area {
  width: 50%;
  margin: auto;
}
</style>
