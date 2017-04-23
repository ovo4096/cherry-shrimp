<template>
  <section class="mdl-layout__tab-panel albums-tab-panel">
    <div class="page-content">
      <div class="flow-grid">
        <div v-for="item in new Array(100)" class="album-card mdl-card mdl-shadow--2dp">
          <div class="mdl-card__media">
            <img src="~@/assets/album1.jpg">
            <mdl-template class="album-card__play-button">
              <button class="mdl-button mdl-button--fab mdl-button--primary mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">play_arrow</i></button>
            </mdl-template>
          </div>
          <div class="mdl-card__title">
            <a href="#" class="album-card__title-text">Guardians</a>
            <a href="#" class="album-card__subtitle-text">Life in the 2k12</a>
          </div>
        </div>
        <div v-for="item in new Array(99)" class="album-card-spacer"></div>
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
@import "~@/assets/mixins";

.page-content {
  padding: 16px 0;
}

.albums-tab-panel {
  .flow-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }

  .album-card-spacer {
    width: 200px;
    margin: 0 8px;
    flex-grow: 1;
  }
  .album-card.mdl-card {
    width: 200px;
    min-height: auto;
    margin: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    .mdl-card__media {
      img {
        width: 100%;
      }
      position: relative;

      &:hover .album-card__play-button {
        opacity: 1;
      }
    }
    .album-card__play-button {
      position: absolute;
      bottom: 8px;
      right: 8px;
      opacity: 0;
      transition: opacity .25s ease-in-out;
    } 
    .mdl-card__title {
      align-items: flex-start;
      flex-direction: column;
      .album-card__title-text {
        @include typo-subhead();
        @include typo-hidden-overflow();
        color: #000;
        @include no-underline-link();
      }
      .album-card__subtitle-text {
        margin-top: 4px;
        @include typo-caption();
        @include typo-hidden-overflow();
        color: rgba(0, 0, 0, 0.54);
        @include no-underline-link();
      }
    }
  }
}
</style>
