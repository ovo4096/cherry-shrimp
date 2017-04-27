<template>
  <div>
    <router-view></router-view>
    <music-player v-if="isLogged"></music-player>
  </div>
</template>

<script>
import MusicPlayer from '@/components/MusicPlayer'

export default {
  components: {
    MusicPlayer
  },
  data: () => ({
    isLogged: false
  }),
  mounted () {
    this.$router.push({ name: 'Login' })
  }
}
</script>
