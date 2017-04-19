<template>
  <div>
    <router-view></router-view>
    <music-player></music-player>
  </div>
</template>

<script>
import MusicPlayer from '@/components/MusicPlayer'

export default {
  components: {
    MusicPlayer
  }
}
</script>
