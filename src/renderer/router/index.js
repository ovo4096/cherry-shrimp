import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import HeaderSearchBar from '@/components/HeaderSearchBar'

import MusicLibrary from '@/components/pages/MusicLibrary'
import HeaderBar from '@/components/HeaderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        headerBar: HeaderSearchBar
      }
    },
    {
      path: '/music-library',
      name: 'MusicLibrary',
      components: {
        default: MusicLibrary,
        headerBar: HeaderBar
      }
    }
  ]
})
