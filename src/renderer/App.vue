<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header-bar></header-bar>
    <drawer-navigation></drawer-navigation>
    <main class="mdl-layout__content">
      <page-content></page-content>
    </main>
    <music-player></music-player>
  </div>
</template>

<script>
import MusicPlayer from '@/components/MusicPlayer'
import DrawerNavigation from '@/components/DrawerNavigation'
import PageContent from '@/components/PageContent'
import HeaderBar from '@/components/HeaderBar'

export default {
  components: {
    MusicPlayer,
    DrawerNavigation,
    PageContent,
    HeaderBar
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";

.mdl-layout__content {
  bottom: $music-player-height;
  position: absolute;
  left: 0;
  right: 0;
  top: $layout-desktop-header-height;
  @media screen and (max-width: $layout-screen-size-threshold) {
    top: $layout-mobile-header-height;
  }
}
</style>
