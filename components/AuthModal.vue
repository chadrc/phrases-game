<template>
<div class="modal" :class="{'is-active': active}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ title }}</p></p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="submit()">{{ submitText }}</button>
      <button class="button">{{ cancelText }}</button>
    </footer>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    submitText: {
      type: String,
      required: true
    },
    cancelText: {
      type: String,
      default: "Cancel"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style scoped>
</style>
