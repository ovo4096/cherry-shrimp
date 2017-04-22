<template>
  <section class="mdl-layout__tab-panel albums-tab-panel">
    <div class="page-content">
      <div class="flow-grid">
        <div v-for="item in new Array(100)" class="album-card mdl-card mdl-shadow--2dp">
          <div class="mdl-card__media">
            <img src="~@/assets/album1.jpg">
            <div class="album-info-card mdl-card">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">Guardians of the Galaxy: Awesome Mix Vol. 2</h2>
              </div>
              <div class="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div class="mdl-card__actions">
                <mdl-template>
                  <button class="mdl-button mdl-button--fab mdl-button--primary mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i class="material-icons">play_arrow</i>
                  </button>
                </mdl-template>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
@import "~@/assets/variables";

.page-content {
  padding: 16px 0;
}

.albums-tab-panel {
  .flow-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }
  .album-card.mdl-card {
    width: 240px;
    min-height: auto;
    margin: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    .mdl-card__media {
      img {
        width: 100%;
      }
    }

    .album-info-card.mdl-card {
      background-color: rgba(0, 0, 0, .5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .mdl-card__title-text {
        color: #fff;
      }
      .mdl-card__supporting-text {
        color: rgba(255, 255, 255, 0.54)
      }
    }
  }
}
</style>
