<template>
  <section class="mdl-layout__tab-panel albums-tab-panel">
    <div class="page-content">
      <div class="flow-grid">
        <div v-for="(item, index) in new Array(25)" class="album-card mdl-card mdl-shadow--2dp">
          <div class="mdl-card__media">
            <img src="~@/assets/album1.jpg" @click.self="goToAlbum">
            <mdl-template class="album-card__play-button">
              <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">play_arrow</i></button>
            </mdl-template>
          </div>
          <div class="mdl-card__title" @click.self="goToAlbum">
            <div class="album-card__title-text" @click.self="goToAlbum">Guardians</div>
            <div class="album-card__subtitle-text"><a href="">Life in the 2k12</a></div>
            <mdl-template class="album-card__menu-button">
              <button :id="'album-card-menu-' + index" class="mdl-button mdl-js-button mdl-button--icon">
                <i class="material-icons">more_vert</i>
              </button>
              <mdl-template>
                <ul class="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect" :for="'album-card-menu-' + index">
                  <li class="mdl-menu__item">Play</li>
                  <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Add to queue</li>
                  <li class="mdl-menu__item">Remove from library</li>
                  <li class="mdl-menu__item">Download</li>
                </ul>
              </mdl-template>
            </mdl-template>
          </div>
        </div>
        <div v-for="item in new Array(24)" class="album-card-spacer"></div>
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
  },
  methods: {
    goToAlbum () {
      this.$router.push({ name: 'Album' })
    }
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
    cursor: pointer;
    width: 200px;
    min-height: auto;
    margin: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    transition: box-shadow .25s ease-in-out;

    &:hover {
      @include focus-shadow();
    }

    .mdl-card__media {
      img {
        width: 100%;
      }
      position: relative;
    }

    .album-card__play-button {
      position: absolute;
      bottom: 8px;
      right: 8px;
      visibility: hidden;
      opacity: 0;
      transition: opacity .25s ease-in-out;

      .mdl-button {
        height: 40px;
        width: 40px;
        min-width: 40px;
        font-size: 26px;
        background-color: rgba(0, 0, 0, .3);
        &:hover {
          background-color: rgba(0, 0, 0, .5);
        }

        .material-icons {
          font-size: 26px;
          transform: translate(-13px, -13px);
          line-height: 26px;
          width: 26px;
          color: #fff;
        }
      }
    }
    &:hover .album-card__play-button {
      visibility: visible;
      opacity: 1;
    }

    .album-card__menu-button {
      position: absolute;
      right: 4px;
      top: 8px;

      .mdl-button {
        height: 26px;
        width: 26px;
        min-width: 26px;
        font-size: 18px;

        .material-icons {
          font-size: 18px;
          transform: translate(-9px, -9px);
          line-height: 18px;
          width: 18px;
          color: #333;
        }
      }
    }

    .mdl-card__title {
      position: relative;
      align-items: flex-start;
      flex-direction: column;
      .album-card__title-text {
        width: 100%;
        @include typo-subhead();
        @include typo-hidden-overflow();
        color: #222;
      }
      .album-card__subtitle-text {
        width: 100%;
        margin-top: 4px;
        @include typo-caption();
        @include typo-hidden-overflow();
        a {
          @include no-underline-link();
          color: rgba(0, 0, 0, 0.54);
        }
      }
    }
  }
}
</style>
