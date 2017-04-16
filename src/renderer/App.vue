<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header-search-bar></header-search-bar>
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
import HeaderSearchBar from '@/components/HeaderSearchBar'

export default {
  components: {
    MusicPlayer,
    DrawerNavigation,
    PageContent,
    HeaderSearchBar
  }
}
</script>
