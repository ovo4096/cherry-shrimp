<template>
  <div class="login">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="mdl-typography--title login-title">Please sign in</div>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <mdl-template>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="username">
            <label class="mdl-textfield__label" for="username">Username</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>
        </mdl-template>
        <mdl-template>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" pattern="-?[0-9]*(\.[0-9]+)?" id="password">
            <label class="mdl-textfield__label" for="password">Password</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>
        </mdl-template>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <mdl-template>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary login-button">
            Sign in
          </button>
        </mdl-template>
      </div>
    </div>
  </div>
</template>

<script>
import MdlTemplate from '@/components/MdlTemplate'

export default {
  components: {
    MdlTemplate
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

.login {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-button {
    width: 300px;
  }

  .login-title {
    @include typo-hidden-overflow();
  }
}
</style>
