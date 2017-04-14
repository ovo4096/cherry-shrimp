<template>
  <main class="mdl-layout__content">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
@import "~@/assets/variables";

.mdl-layout__content {
  margin-bottom: $music-player-height;
}
</style>
