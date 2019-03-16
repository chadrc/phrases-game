<template>
  <section class="container">
    <h1 class="title has-text-centered">
      Play
    </h1>
    <section class="game-area">
      <button class="button is-primary is-large is-fullwidth" @click="startNewGame()">
        New Game
      </button>
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["startNewGame"])
  }
};
</script>

<style scoped>
.game-area {
  width: 50%;
  margin: auto;
}
</style>
