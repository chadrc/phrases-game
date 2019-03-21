<template>
  <section class="container">
    <h1 class="title has-text-centered">
      Play
    </h1>
    <section class="game-area">
      <game-word-display></game-word-display>
      <button class="button is-primary is-large is-fullwidth" @click="startGame()">
        New Game
      </button>
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import GameWordDisplay from "@/components/GameWordDisplay";

export default {
  components: { GameWordDisplay },
  methods: {
    ...mapActions("game", ["startGame"])
  }
};
</script>

<style scoped>
.game-area {
  width: 50%;
  margin: auto;
}
</style>
