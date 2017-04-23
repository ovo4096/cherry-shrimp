<template>
  <section class="mdl-layout__tab-panel songs-tab-panel">
    <div class="page-content">
      <mdl-template>
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric min-cell">NAME</th>
              <th class="mdl-data-table__cell--non-numeric"></th>
              <th class="mdl-data-table__cell--non-numeric">ARTIST</th>
              <th class="mdl-data-table__cell--non-numeric">ALBUM</th>
              <th class="min-cell"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in new Array(25)">
              <td class="mdl-data-table__cell--non-numeric">
                <div class="music-cover">
                  <img src="~@/assets/album1.jpg" alt="cover">
                  <mdl-template class="music-play-button">
                    <button class="mdl-button mdl-js-button mdl-button--icon">
                      <i class="material-icons">play_circle_filled</i>
                    </button>
                  </mdl-template>
                </div>
              </td>
              <td class="mdl-data-table__cell--non-numeric">Futurism Love (feat. Miku Hatsune)</td>
              <td class="mdl-data-table__cell--non-numeric"><a href="">BAKAEDITZ</a></td>
              <td class="mdl-data-table__cell--non-numeric"><a href="">Life in the 2k12</a></td>
              <td>
                <mdl-template>
                  <button :id="'song-menu-' + index" class="mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">more_vert</i>
                  </button>
                </mdl-template>
                <mdl-template class="song-menu">
                  <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" :for="'song-menu-' + index">
                    <li class="mdl-menu__item">Play</li>
                    <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Add to queue</li>
                    <li class="mdl-menu__item">Remove from library</li>
                    <li class="mdl-menu__item">Download</li>
                  </ul>
                </mdl-template>
              </td>
            </tr>
          </tbody>
        </table>
      </mdl-template>
    </div>
  </section>
</template>

<script>
import MdlTemplate from '@/components/MdlTemplate'
import MdlTabPanel from '@/components/MdlTabPanel'

export default {
  components: {
    MdlTemplate,
    MdlTabPanel
  }
}
</script>

<style lang="scss">
.mdl-data-table th:first-of-type {
  width: 1px;
}

.mdl-data-table td {
  border-bottom: none;
}

.songs-tab-panel .song-menu .mdl-menu__container {
  overflow: hidden;
  height: 0 !important;
  // width: 0 !important;

  &.is-visible {
    overflow: visible;
    height: auto;
    // width: auto;
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

.songs-tab-panel {
  .page-content {
    padding: 32px 16px;
  }

  .music-cover {
    width: 48px;
    height: 48px;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .music-play-button {
      visibility: hidden;
      opacity: 0;
      transition-duration: 0.28s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: opacity;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.25);
      .material-icons {
        color: #fff;
      }
    }
  }

  .mdl-data-table tr:hover .music-cover .music-play-button {
    visibility: visible;
    opacity: 1;
  }

  .mdl-data-table td {
    a {
      @include no-underline-link();
      color: #000;
    }
  }

  .min-cell {
    width: 1px;
  }

  .mdl-data-table {
    width: 100%;
    border-radius: 2px;
    border: none;
  }

  .button-group {
    display: flex;
    .mdl-template {
      margin: 0 8px;
    }
  }

  .song-menu {
    position: absolute;
    top: 0;
    right: 24px;
  }
}
</style>
