<template>
  <section class="mdl-layout__tab-panel songs-tab-panel">
    <div class="page-content">
      <mdl-template>
        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
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
            <tr v-for="item in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
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
                <div class="button-group">
                  <mdl-template>
                    <button class="mdl-button mdl-js-button mdl-button--icon">
                      <i class="material-icons">delete_favorite</i>
                    </button>
                  </mdl-template>
                  <mdl-template>
                    <button class="mdl-button mdl-js-button mdl-button--icon">
                      <i class="material-icons">file_download</i>
                    </button>
                  </mdl-template>
                </div>
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
</style>

<style lang="scss" scoped>
@import "~@/assets/variables";

.songs-tab-panel {
  .page-content {
    padding: 32px 16px;
    background: $global-bg-color;
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
}
</style>
