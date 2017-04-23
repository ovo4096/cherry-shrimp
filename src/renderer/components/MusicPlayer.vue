<template>
  <div class="music-player">
    <div class="music-player__music">
      <img class="music-player__music-cover"
           src="~@/assets/album1.jpg"
           alt="cover">
      <div class="music-player__music-intro">
        <div class="music-player__music-title">Futurism Love (feat. Miku Hatsune)</div>
        <div class="music-player__music-auther"><a href="#">BAKAEDITZ</a> - <a href="#">Life in the 2k12</a></div>
      </div>
    </div>
    <div class="music-player__control">
      <mdl-template>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">repeat</i>
        </button>
      </mdl-template>
      <mdl-template>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">skip_previous</i>
        </button>
      </mdl-template>
      <mdl-template>
        <button class="mdl-button mdl-js-button mdl-button--icon-big mdl-button--colored">
          <i class="material-icons">play_circle_filled</i>
        </button>
      </mdl-template>
      <mdl-template>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">skip_next</i>
        </button>
      </mdl-template>
      <mdl-template>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">shuffle</i>
        </button>
      </mdl-template>
    </div>
    <div class="music-player__action">
      <div class="music-player__volume">
        <i class="material-icons music-player__volume-button">volume_down</i>
        <mdl-template>
          <input class="mdl-slider mdl-js-slider"
                 type="range"
                 min="0"
                 max="100"
                 value="0"
                 tabindex="0">
        </mdl-template>
        <i class="material-icons music-player__volume-button">volume_up</i>
      </div>
      <mdl-template>
        <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect">
          <input type="checkbox"
                 class="mdl-icon-toggle__input">
          <i class="mdl-icon-toggle__label material-icons">queue_music</i>
        </label>
      </mdl-template>
      <div class="music-player__time-label">0:01 / 3:54</div>
    </div>
    <div class="music-player__progress">
      <mdl-template>
        <input class="mdl-slider mdl-js-slider"
               type="range"
               min="0"
               max="100"
               value="0"
               tabindex="0">
      </mdl-template>
    </div>
  </div>
</template>

<script>
import MdlTemplate from '@/components/MdlTemplate'

export default {
  components: {
    MdlTemplate
  }
}
</script>

<style lang="scss">
@import "~@/assets/variables";
@import "~@/assets/mixins";

.music-player {
  .music-player__action .music-player__volume {

    .mdl-slider__container {
      .mdl-slider {
        margin: 0;
        width: 100%;
        min-width: 50px;
      }
      .mdl-slider__background-flex {
        margin: 0 6px;
        width: calc(100% - 12px)
      }
    }

    >*:nth-child(-n+2) {
      transition: opacity 0.218s ease-in;
      opacity: 0;
    }

    &:hover>*:nth-child(-n+2) {
      opacity: 1;
    }
  }

  .music-player__progress {
    .mdl-slider__container {
      height: 100%;
      .mdl-slider {
        height: 100%;
        width: 100%;
        margin: 0;
        &.is-lowest-value::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          box-sizing: border-box;
          border-radius: 50%;
          background: $range-color;
          border: none;
          transition: transform 0.18s $animation-curve-default,
          border 0.18s $animation-curve-default,
          box-shadow 0.18s $animation-curve-default,
          background 0.28s $animation-curve-default;
        }

        &.is-lowest-value:focus:not(:active)::-webkit-slider-thumb {
          box-shadow: 0 0 0 10px $range-faded-color;
        }

        &.is-lowest-value:active::-webkit-slider-thumb {
          background-image: none;
          background: $range-color;
          transform: scale(1.5);
        }
      }
      .mdl-slider__background-flex {
        height: 100%;
        width: calc(100% - 12px);
        transform: none;
        top: 0;
        margin: 0 6px;
        .mdl-slider__background-upper {
          background-color: transparent;
        }
      }
    }
  }

  &:hover .music-player__progress .mdl-slider__container .mdl-slider__background-flex .mdl-slider__background-upper {
    background-color: #e6e6e6;
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

$button-icon-scale: 2.25;
$button-icon-offset: 8px;

.mdl-button--icon-big {
  border-radius: 50%;
  font-size: $button-fab-font-size * $button-icon-scale;
  height: $button-icon-size * $button-icon-scale;
  margin-left: 0;
  margin-right: 0;
  min-width: $button-icon-size * $button-icon-scale;
  width: $button-icon-size * $button-icon-scale;
  padding: 0;
  overflow: hidden;
  line-height: normal;

  & .material-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(- $button-fab-font-size * $button-icon-scale / 2 - $button-icon-offset / 2, - $button-fab-font-size * $button-icon-scale / 2 - $button-icon-offset / 2);
    line-height: $button-fab-font-size * $button-icon-scale + $button-icon-offset;
    width: $button-fab-font-size * $button-icon-scale + $button-icon-offset;
    font-size: $button-fab-font-size * $button-icon-scale + $button-icon-offset;
  }

  &.mdl-button--mini-icon {
    height: $button-icon-size-mini * $button-icon-scale;
    min-width: $button-icon-size-mini * $button-icon-scale;
    width: $button-icon-size-mini * $button-icon-scale;

    & .material-icons {
      top: ($button-icon-size-mini * $button-icon-scale - $button-fab-font-size * $button-icon-scale) / 2;
      left: ($button-icon-size-mini * $button-icon-scale - $button-fab-font-size * $button-icon-scale) / 2;
    }
  }

  & .mdl-button__ripple-container {
    border-radius: 50%; // Fixes clipping bug in Safari.
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
  }
}

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

  .mdl-button {
    margin: 0 8px;
  }

  .music-player__music {
    flex: 1;
    display: flex;
    min-width: $music-player-height;
    height: $music-player-height - 4px;
    margin-top: 4px;

    .music-player__music-cover {
      height: $music-player-height;
      width: $music-player-height;
      margin-right: 16px;
      position: relative;
      top: -4px;
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
        a {
          @include no-underline-link();
        }
      }
    }
  }

  .music-player__control {
    display: flex;
    align-items: center;
    margin: 0 16px;
    height: $music-player-height - 4px;
    margin-top: 4px;
  }

  .music-player__action {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 16px;
    height: $music-player-height - 4px;
    margin-top: 4px;
    .music-player__volume {
      display: flex;
      align-items: center;
      margin: 0 8px;
      .music-player__volume-button {
        width: $button-icon-size;
        height: $button-icon-size;
        line-height: $button-icon-size;
        text-align: center;
        cursor: default;
      }
    }

    .music-player__time-label {
      position: absolute;
      top: 15px;
      right: 16px;
      font-size: 12px;
      line-height: 12px;
      margin: 0 5px;
      color: #757575;
      opacity: 0;
      transition: opacity .218s ease;
    }
  }

  .music-player__progress {
    position: absolute;
    top: 0;
    left: 84px;
    right: -6px;
    height: 4px;
    .mdl-template {
      height: 100%;
      width: 100%;
    }
  }

  &:hover {
    .music-player__action .music-player__time-label {
      opacity: 1;
    }
  }
}
</style>
