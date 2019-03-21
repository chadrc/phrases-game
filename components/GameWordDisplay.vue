<template>
  <section>
    <span
      v-for="(c, index) of splitWord"
      :key="c + index"
      v-html="htmlForCharacter(c)"
    ></span>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GameWordDisplay",
  computed: {
    ...mapGetters("game", ["currentGame"]),
    splitWord() {
      return this.currentGame ? this.currentGame.word.split("") : [""];
    }
  },
  methods: {
    htmlForCharacter(c) {
      if (c === " ") {
        return "&nbsp;";
      }

      return c;
    }
  }
};
</script>

<style scoped></style>
