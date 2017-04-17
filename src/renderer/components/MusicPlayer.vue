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
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">repeat</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">skip_previous</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon-big mdl-button--colored">
        <i class="material-icons">play_circle_filled</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">skip_next</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">shuffle</i>
      </button>
    </div>
    <div class="music-player__action">
      <div class="music-player__volume">
        <i class="material-icons music-player__volume-button">volume_down</i>
        <input class="mdl-slider mdl-js-slider"
              type="range"
              min="0"
              max="100"
              value="0"
              tabindex="0">
        <i class="material-icons music-player__volume-button">volume_up</i>
      </div>
      <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-icon-toggle__input">
        <i class="mdl-icon-toggle__label material-icons">queue_music</i>
      </label>
    </div>
  </div>
</template>

<style lang="scss">
.music-player {
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

  .music-player__action .music-player__volume {
    > *:nth-child(-n+2) {
      transition: opacity 0.218s ease-in-out;
      opacity: 0;
    }

    &:hover > *:nth-child(-n+2) {
      opacity: 1;
    }
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
  color: inherit;
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
    align-items: center;
    margin: 0 16px;
  }

  .music-player__action {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 16px;

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
  }
}
</style>
