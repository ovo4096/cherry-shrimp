<template>
  <div class="music-player">
    <div class="music-player__music">
      <img class="music-player__music-cover"
           src="~@/assets/album1.jpg"
           alt="cover">
      <div class="music-player__music-intro">
        <div class="music-player__music-title">Futurism Love (feat. Miku Hatsune)Futurism Love (feat. Miku Hatsune)Futurism Love (feat. Miku Hatsune)Futurism Love (feat. Miku Hatsune)Futurism Love (feat. Miku Hatsune)</div>
        <div class="music-player__music-auther"><a href="#">BAKAEDITZ</a> - <a href="#">Life in the 2k12</a></div>
      </div>
    </div>
    <div class="music-player__control">
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">repeat</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">skip_previous</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
        <i class="material-icons">play_circle_filled</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">skip_next</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">shuffle</i>
      </button>
    </div>
    <div class="music-player__action"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

.music-player {
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: $music-player-height;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  display: flex;
  align-items: center;

  .music-player__music {
    flex: 1;
    display: flex;
    min-width: 0;

    .music-player__music-cover {
      height: $music-player-height;
      width: $music-player-height;
      margin-right: 8px;
    }

    .music-player__music-intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include typo-hidden-overflow();

      .music-player__music-title {
        @include typo-subhead();
        @include typo-hidden-overflow();
      }

      .music-player__music-auther {
        @include typo-caption();
        @include typo-hidden-overflow();
        margin-top: 4px;
      }
    }
  }

  .music-player__control {
    display: flex;
    margin: 0 16px;
    .mdl-button {
      margin: 0 4px;
    }
  }

  .music-player__action {
    flex: 1;
  }
}
</style>
