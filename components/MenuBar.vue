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
              <button v-show="!currentUser"
                      class="button is-primary"
                      @click="startSignUp">
                <strong>Sign up</strong>
              </button>
              <button v-show="!currentUser"
                      class="button is-light"
                      @click="startSignIn">
                Sign in
              </button>
              <button v-show="currentUser"
                      class="button is-primary"
                      :class="{'is-loading': sendingSignOut}"
                      @click="submitSignOut">
                <strong>Sign Out</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AuthModal :active="authActive"
                 :loading="authLoading"
                 :error-message="authError"
                 :title="authText"
                 :submit-text="authText"
                 @cancel="cancelAuth"
                 @submit="submitAuth"
      />
    </nav>
</template>

<script>
import AuthModal from "@/components/AuthModal";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { AuthModal },
  computed: {
    ...mapGetters("auth", [
      "signingUp",
      "signingIn",
      "signUpError",
      "signInError",
      "sendingSignUp",
      "sendingSignIn",
      "sendingSignOut",
      "currentUser"
    ]),
    authActive() {
      return this.signingUp || this.signingIn;
    },
    authLoading() {
      return this.sendingSignUp || this.sendingSignIn;
    },
    authError() {
      return this.signUpError || this.signInError;
    },
    authText() {
      if (this.signingUp) {
        return "Sign Up";
      } else if (this.signingIn) {
        return "Sign In";
      }

      return "";
    }
  },
  methods: {
    ...mapActions("auth", [
      "startSignUp",
      "startSignIn",
      "endSignUp",
      "endSignIn",
      "submitSignUp",
      "submitSignIn",
      "submitSignOut"
    ]),
    cancelAuth() {
      if (this.signingUp) {
        this.endSignUp();
      } else if (this.signingIn) {
        this.endSignIn();
      }
    },
    submitAuth(data) {
      if (this.signingUp) {
        this.submitSignUp(data);
      } else if (this.signingIn) {
        this.submitSignIn(data);
      }
    }
  }
};
</script>

<style scoped>
</style>
