<template>
<div class="modal" :class="{'is-active': active}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ title }}</p></p>
      <button class="delete" aria-label="close" @click="cancel()"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-model="username" class="input" type="text" placeholder="Username">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="Password">
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="submit()">{{ submitText }}</button>
      <button class="button" @click="cancel()">{{ cancelText }}</button>
    </footer>
  </div>
</div>
</template>

<script>
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
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$emit("submit", { username: this.username, password: this.password });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
</style>
