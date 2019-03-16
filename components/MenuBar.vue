<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item">
          <h2 class="title">Phrases</h2>
        </span>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">
            Home
          </nuxt-link>
          <nuxt-link to="/play" class="navbar-item">
            Play
          </nuxt-link>
          <nuxt-link to="/create" class="navbar-item">
            Create
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary" @click="startSignUp">
                <strong>Sign up</strong>
              </button>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      <AuthModal :active="signingUp" title="Sign Up" submit-text="Sign Up" @cancel="endSignUp" @submit="submitSignUp"/>
    </nav>
</template>

<script>
import AuthModal from "@/components/AuthModal";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { AuthModal },
  computed: {
    ...mapGetters("auth", ["signingUp"])
  },
  methods: {
    ...mapActions("auth", ["startSignUp", "endSignUp", "submitSignUp"])
  },
};
</script>

<style scoped>

</style>
