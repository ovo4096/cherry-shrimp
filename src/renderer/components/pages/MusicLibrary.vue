<template>
  <layout>
    <music-library-header slot="header"></music-library-header>
    <drawer-navigation slot="drawer"></drawer-navigation>
    <main slot="content" class="mdl-layout__content">
      <songs-tab-panel class="is-active" id="songs-tab"></songs-tab-panel>
      <albums-tab-panel id="albums-tab"></albums-tab-panel>
      <playlists-tab-panel id="playlists-tab"></playlists-tab-panel>
      <artists-tab-panel id="artists-tab"></artists-tab-panel>
    </main>
  </layout>
</template>

<script>
import MdlTemplate from '@/components/MdlTemplate'
import Layout from '@/components/Layout'
import MusicLibraryHeader from '@/components/MusicLibraryHeader'
import DrawerNavigation from '@/components/DrawerNavigation'
import SongsTabPanel from '@/components/SongsTabPanel'
import AlbumsTabPanel from '@/components/AlbumsTabPanel'
import PlaylistsTabPanel from '@/components/PlaylistsTabPanel'
import ArtistsTabPanel from '@/components/ArtistsTabPanel'

export default {
  components: {
    MdlTemplate,
    Layout,
    MusicLibraryHeader,
    DrawerNavigation,
    SongsTabPanel,
    AlbumsTabPanel,
    PlaylistsTabPanel,
    ArtistsTabPanel
  }
}
</script>
