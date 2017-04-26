import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import MusicLibrary from '@/components/pages/MusicLibrary'
import Album from '@/components/pages/Album'
import Playlist from '@/components/pages/Playlist'
import Artist from '@/components/pages/Artist'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/music-library',
      name: 'MusicLibrary',
      component: MusicLibrary
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/artist',
      name: 'Artist',
      component: Artist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
