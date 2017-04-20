<template>
  <section class="mdl-layout__tab-panel songs-tab-panel">
    <div class="page-content">
      <mdl-template>
        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric min-cell">COVER</th>
              <th class="mdl-data-table__cell--non-numeric">NAME</th>
              <th class="mdl-data-table__cell--non-numeric">ARTIST</th>
              <th class="mdl-data-table__cell--non-numeric">ALBUM</th>
              <th class="min-cell"></th>
              <th class="min-cell"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
              <td class="mdl-data-table__cell--non-numeric"><img class="music-cover" src="~@/assets/album1.jpg" alt="cover"></td>
              <td class="mdl-data-table__cell--non-numeric">Futurism Love (feat. Miku Hatsune)</td>
              <td class="mdl-data-table__cell--non-numeric"><a href="">BAKAEDITZ</a></td>
              <td class="mdl-data-table__cell--non-numeric"><a href="">Life in the 2k12</a></td>
              <td>
                <mdl-template>
                  <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect">
                    <input type="checkbox" class="mdl-icon-toggle__input" checked>
                    <i class="mdl-icon-toggle__label material-icons">favorite</i>
                  </label>
                </mdl-template>
              </td>
              <td>
                <mdl-template>
                  <button class="mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">file_download</i>
                  </button>
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
</style>

<style lang="scss" scoped>
.songs-tab-panel {
  .page-content {
    margin: 32px 16px;
  }

  .music-cover {
    display: block;
    width: 48px;
    height: 48px;
  }

  .min-cell {
    width: 1px;
  }

  .mdl-data-table {
    width: 100%;
    border-radius: 2px;
    overflow: hidden;
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
