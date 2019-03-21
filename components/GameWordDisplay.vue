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
  render(h) {
    return h(
      "section",
      {},
      this.splitWord.map((c, index) => {
        const key = c + index;

        if (c === " ") {
          return h("span", { key, domProps: { innerHTML: "&nbsp;" } });
        }

        return h("span", { key }, [c]);
      })
    );
  }
};
</script>

<style scoped></style>
