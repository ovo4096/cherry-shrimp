<template>
  <section class="mdl-layout__tab-panel artists-tab-panel">
    <div class="page-content">
      <div class="flow-grid">
        <div v-for="(item, index) in new Array(25)" class="artist-card mdl-card">
          <div class="artist-cover">
            <img src="~@/assets/album1.jpg" @click.self="goToArtist">
          </div>
          <div class="artist-name" @click.self="goToArtist">モモバコ</div>
          <mdl-template class="artist-card__menu-button">
            <button :id="'artist-card-menu-' + index" class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">more_vert</i>
            </button>
            <mdl-template>
              <ul class="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect" :for="'artist-card-menu-' + index">
                <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Shuffle artist</li>
                <li class="mdl-menu__item">Remove from library</li>
              </ul>
            </mdl-template>
          </mdl-template>
        </div>
        <div v-for="item in new Array(24)" class="artist-card-spacer"></div>
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
    goToArtist () {
      this.$router.push({ name: 'Artist' })
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

.artists-tab-panel {
  .flow-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }

  .artist-card-spacer {
    width: 200px;
    margin: 0 8px;
    flex-grow: 1;
  }
  .artist-card.mdl-card {
    cursor: pointer;
    width: 200px;
    min-height: auto;
    margin: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: visible;
    background: none;

    .artist-cover {
      @include shadow-2dp();
      border-radius: 50%;
      margin: 16px;
      overflow: hidden;
      transition: box-shadow .25s ease-in-out;
      img {
        width: 100%;
      }
    }

    &:hover .artist-cover {
      @include focus-shadow();
    }

    .artist-name {
      @include typo-subhead();
      padding: 16px;
      text-align: center;
      font-size: 18px;
      color: #333;
    }

    .artist-card__menu-button {
      position: absolute;
      right: 4px;
      bottom: 16px;

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
  }
}
</style>
