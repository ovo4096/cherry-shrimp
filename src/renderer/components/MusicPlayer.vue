<template>
  <div>
    <div class="playlist"
         ref="playlist">
      <div class="container-wrapper">
        <div class="container">
          <table class="mdl-data-table mdl-js-data-table">
            <thead>
              <tr>
                <th></th>
                <th class="mdl-data-table__cell--non-numeric">SONG</th>
                <th>DURATION</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="music-cover"></div>
                </td>
                <td class="mdl-data-table__cell--non-numeric">
                  <div class="music-info">
                    <div class="name">Futurism Love (feat. Miku Hatsune)</div>
                    <div class="auth"><a href="#">BAKAEDITZ</a> - <a href="#">Life in the 2k12</a></div>
                  </div>
                </td>
                <td>3:54</td>
                <td>
                  <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                    <i class="material-icons">favorite</i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="music-cover"></div>
                </td>
                <td class="mdl-data-table__cell--non-numeric">
                  <div class="music-info">
                    <div class="name">Deneb</div>
                    <div class="auth"><a href="#">REDALiCE</a> - <a href="#">Emperor</a></div>
                  </div>
                </td>
                <td>3:54</td>
                <td>
                  <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                    <i class="material-icons">favorite</i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="music-player">
      <div class="player-progress">
        <div class="progress">
          <input class="mdl-slider mdl-js-slider"
                 type="range"
                 min="0"
                 max="100"
                 value="0"
                 tabindex="0">
        </div>
      </div>
      <div class="music">
        <div class="music-cover"><img src="../assets/logo.png"
               alt="logo"></div>
        <div class="music-intro">
          <div class="music-info">
            <div class="name">Futurism Love (feat. Miku Hatsune)</div>
            <div class="auth"><a href="#">BAKAEDITZ</a> - <a href="#">Life in the 2k12</a></div>
          </div>
          <div class="music-action">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">favorite</i>
            </button>
          </div>
        </div>
      </div>
      <div class="player-control">
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">repeat</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">skip_previous</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--play mdl-button--colored">
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
        <div class="audio-volume"
             ref="audioVolume"
             @mouseleave="hideAudioVolume"
             @mouseenter="showAudioVolume">
          <i class="material-icons volume-down">volume_down</i>
          <div class="audio-volume-slider">
            <input class="mdl-slider mdl-js-slider"
                   type="range"
                   min="0"
                   max="100"
                   value="0"
                   tabindex="0">
          </div>
          <i class="material-icons volume-up">volume_up</i>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--icon button-queue-music"
                ref="togglePlaylistButton"
                @click="togglePlaylist">
          <i class="material-icons">queue_music</i>
        </button>
      </div>
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
    },
    togglePlaylist () {
      this.$refs.playlist.classList.toggle('show')
      this.$refs.togglePlaylistButton.classList.toggle('mdl-button--colored')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/_variables";
.player-progress {
  .progress {
    >.mdl-slider__container {
      width: 100%;
      height: 4px;
    }

    .mdl-slider__background-flex {
      margin: 0;
      width: 100%;
      height: 4px;
      top: 1px;
    }

    .mdl-slider__background-upper {
      background: none;
    }

    .mdl-slider.is-upgraded.is-lowest-value+.mdl-slider__background-flex>.mdl-slider__background-upper {
      left: 0;
    }

    .mdl-slider {
      &.is-lowest-value::-webkit-slider-thumb {
        background: $range-color;
        border: none;
      }

      &.is-lowest-value::-moz-range-thumb {
        background: $range-color;
        border: none;
      }

      &.is-lowest-value:active::-webkit-slider-thumb {
        border: none;
        transform: scale(1.5);
      }

      &.is-lowest-value:active::-moz-range-thumb {
        border: none;
        transform: scale(1.5);
      }
    }
  }
}

.music-player:hover {
  .mdl-slider__background-upper {
    background: #e6e6e6;
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/_variables";
@import "~material-design-lite/src/_mixins";

$button-play-fab-font-size: 24px+26px+17px !default;
$button-play-icon-size: 32px+26px+17px !default;
$button-play-icon-size-mini: 24px+26px+17px !default;

.playlist {
  position: fixed;
  top: auto;
  left: auto;
  right: 16px;
  bottom: 110px;
  background: #fff;

  max-width: 732px;
  border-radius: 2px;
  z-index: 2;
  transform-origin: right bottom 0px;
  transform: scale(0);
  transition: all .3s ease;

  @include shadow-2dp();

  &.show {
    transform: scale(1);
  }

  .music-cover {
    width: 40px;
    height: 40px;
    background: #333;
  }

  .music-info {
    overflow: hidden;
    max-width: 400px;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .auth {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      a,
      a:hover,
      a:focus {
        color: #616161;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .container-wrapper {
    padding: 2px 0;
    overflow: hidden;
  }

  .container {
    max-height: calc(100vh - 110px - 112px - 16px);
    overflow: auto;
  }

  .mdl-data-table {
    border: none;
  }

  .mdl-data-table td {
    border-bottom: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    box-sizing: border-box;
    right: 24px;
    border: 8px solid white;
    z-index: -1;
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.24);
  }
}

.player-progress {
  position: absolute;
  top: 0;
  left: 84px;
  right: -6px;
  height: 4px;
  .progress {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    .mdl-slider {
      margin: 0;
      width: 100%;
    }

    .mdl-slider.is-upgraded {
      height: 4px;
    }
  }
}

.audio-volume {
  display: flex;
  align-items: center;
  margin: 0 16px;
  min-width: 140px;
  .volume-up,
  .volume-down {
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
  box-shadow: 0 0 8px rgba(0, 0, 0, .4);

  display: flex;

  .mdl-button {
    margin: 5px;
  }

  .mdl-button.button-queue-music {
    margin-right: 32px;
  }
}

.music {
  margin-top: 4px;
  flex: 1;
  .music-cover {
    width: $music-player-height;
    height: $music-player-height;
    background: $layout-header-bg-color;
    margin-right: 8px;
    float: left;
    position: relative;
    top: -4px;
    img {
      display: block;
      height: 100%;
      width: 100%;
    }
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
        a,
        a:hover,
        a:focus {
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
  margin-top: 4px;
  display: flex;
  align-items: center;
}

.player-action {
  margin-top: 4px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
