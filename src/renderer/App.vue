<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <router-view name="headerBar"></router-view>
    <drawer-navigation></drawer-navigation>
    <page-content></page-content>
    <music-player></music-player>
  </div>
</template>

<script>
import MusicPlayer from '@/components/MusicPlayer'
import DrawerNavigation from '@/components/DrawerNavigation'
import PageContent from '@/components/Content'

export default {
  components: {
    MusicPlayer,
    DrawerNavigation,
    PageContent
  }
}
</script>
