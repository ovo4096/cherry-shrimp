<template>
  <div class="mdl-layout__drawer">
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" :to="{ name: 'Home'}">Home</router-link>
      <router-link class="mdl-navigation__link" :to="{ name: 'MusicLibrary'}">Music library</router-link>
    </nav>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link"
         href="">Settings</a>
      <a class="mdl-navigation__link"
         href="">Help & feedback</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.mdl-layout__drawer {
  border: none;
}
</style>
