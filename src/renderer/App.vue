<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header-bar></header-bar>
    <drawer-navigation></drawer-navigation>
    <page-content>
      <router-view></router-view>
    </page-content>
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
