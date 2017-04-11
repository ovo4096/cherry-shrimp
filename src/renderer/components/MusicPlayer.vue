<template>
  <div class="music-player">
    <div class="music">
      <div class="music-cover"></div>
      <div class="music-intro">
        <div class="music-info">
          <div class="name">Futurism Love (feat. Miku Hatsune)</div>
          <div class="auth"><a href="#">BAKAEDITZ</a> - <a href="#">Life in the 2k12</a></div>
        </div>
        <!--<div class="music-action">
          <button class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">favorite</i>
          </button>
        </div>-->
      </div>
    </div>
    <div class="player-control">
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">repeat</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">skip_previous</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--play">
        <i class="material-icons">play_circle_filled</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">skip_next</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">shuffle</i>
      </button>
    </div>
    <div class="player-action">
      <div class="audio-volume" ref="audioVolume" @mouseleave="hideAudioVolume" @mouseenter="showAudioVolume">
        <i class="material-icons volume-down">volume_down</i>
        <div class="audio-volume-slider">
          <input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="0" tabindex="0">
        </div>
        <i class="material-icons volume-up">volume_up</i>
      </div>
      <button class="mdl-button mdl-js-button mdl-button--icon button-queue-music">
        <i class="material-icons">queue_music</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showAudioVolume () {
      this.$refs.audioVolume.classList.add('show')
    },
    hideAudioVolume () {
      this.$refs.audioVolume.classList.remove('show')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables";
@import "~material-design-lite/src/_mixins";

$button-play-fab-font-size: 24px + 26px !default;
$button-play-icon-size: 32px + 26px !default;
$button-play-icon-size-mini: 24px + 26px !default;

.audio-volume {
  display: flex;
  align-items: center;
  margin: 0 16px;
  min-width: 140px;
  .volume-up, .volume-down {
    cursor: default;
  }

  .volume-down {
    opacity: 0;
    transition: opacity 0.218s ease-in;
  }

  .audio-volume-slider {
    margin: 0 -4px;
    opacity: 0;
    transition: opacity 0.218s ease-in;
  }
}

.audio-volume.show {
  .volume-down {
    opacity: 1;
  }

  .audio-volume-slider {
    margin: 0 -4px;
    opacity: 1;
  }
}

.mdl-button--play {
  border-radius: 50%;
  font-size: $button-play-fab-font-size;
  height: $button-play-icon-size;
  margin-left: 0;
  margin-right: 0;
  min-width: $button-play-icon-size;
  width: $button-play-icon-size;
  padding: 0;
  overflow: hidden;
  color: inherit;
  line-height: normal;

  & .material-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(- $button-play-fab-font-size / 2, - $button-play-fab-font-size / 2);
    line-height: $button-play-fab-font-size;
    width: $button-play-fab-font-size;
    font-size: $button-play-fab-font-size;
  }

  &.mdl-button--mini-icon {
    height: $button-play-icon-size-mini;
    min-width: $button-play-icon-size-mini;
    width: $button-play-icon-size-mini;

    & .material-icons {
      top: ($button-play-icon-size-mini - $button-play-fab-font-size) / 2;
      left: ($button-play-icon-size-mini - $button-play-fab-font-size) / 2;
    }
  }

  & .mdl-button__ripple-container {
    border-radius: 50%;
    // Fixes clipping bug in Safari.
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
  }
}

.music-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: $music-player-height;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.4);

  display: flex;

  .mdl-button {
    margin: 5px;
  }

  .mdl-button.button-queue-music {
    margin-right: 32px;
  }
}

.music {
  flex: 1;
  .music-cover {
    width: $music-player-height;
    height: $music-player-height;
    background: $layout-header-bg-color;
    margin-right: 8px;
    float: left;
  }
  .music-intro {
    display: flex;
    align-items: center;
    height: 100%;
    .music-info {
      flex: 1;
      overflow: hidden;
      .name {
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
        white-space: nowrap;
      }
      .auth {
        height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 4px;
        font-size: 13px;
        white-space: nowrap;
        a, a:hover, a:focus {
          color: #616161;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.player-control {
  margin: 0 48px;
  display: flex;
  align-items: center;
}

.player-action {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
