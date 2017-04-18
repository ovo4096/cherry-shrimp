<template>
  <div class="mdl-layout__drawer">
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link"
         href="">Home</a>
      <router-link class="mdl-navigation__link" :to="{ name: 'MusicLibrary'}">Music Library</router-link>
    </nav>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link"
         href="">Settings</a>
      <a class="mdl-navigation__link"
         href="">Help & Feedback</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.mdl-layout__drawer {
  border: none;
}
</style>
