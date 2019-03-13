<template>
<div class="modal" :class="{'is-active': signingUp}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Sign Up</p>
      <button class="delete" aria-label="close" @click="endSignUp()"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Sign Up</button>
      <button class="button" @click="endSignUp()">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["signingUp"])
  },
  methods: {
    ...mapActions("auth", ["endSignUp"])
  }
};
</script>

<style scoped>
</style>
