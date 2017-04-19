<template>
  <mdl-template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <slot name="header"></slot>
      <slot name="drawer"></slot>
      <slot name="content"></slot>
    </div>
  </mdl-template>
</template>

<script>
import MdlTemplate from '@/components/MdlTemplate'

export default {
  components: { MdlTemplate }
}
</script>

<style lang="scss">
@import "~@/assets/variables";
@import "~material-design-lite/src/mixins";

.mdl-layout__content {
  margin-bottom: $music-player-height;
}
</style>
