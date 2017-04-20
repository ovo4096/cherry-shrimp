<template>
  <layout>
    <home-header slot="header"></home-header>
    <drawer-navigation slot="drawer"></drawer-navigation>
    <main slot="content" class="mdl-layout__content">
      <div class="page-content">
        <template v-for="group in groups">
          <div class="playlist-group">
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--12-col">
                <div class="mdl-typography--title">{{ group.name }}</div>
              </div>
            </div>
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--12-col" ref="scrollbars">
                <div class="mdl-card-group iscroll-wrapper">
                  <div v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" class="music-set-card mdl-shadow--2dp">
                    <div class="mdl-card">
                      <div class="mdl-card__title mdl-card--expand">
                        <h2 class="mdl-card__title-text">
                              Today's Best Music
                            </h2>
                      </div>
                      <div class="mdl-card__title">
                        <div class="mdl-card__subtitle-text">Lorem ipsum dolor sit amet</div>
                      </div>
                      <div class="mdl-card__play">
                        <mdl-template>
                          <button class="mdl-button mdl-button--fab mdl-button--primary mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">play_arrow</i></button>
                        </mdl-template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </main>
  </layout>
</template>

<script>
import IScroll from 'iscroll'
import MdlTemplate from '@/components/MdlTemplate'
import Layout from '@/components/Layout'
import HomeHeader from '@/components/HomeHeader'
import DrawerNavigation from '@/components/DrawerNavigation'

export default {
  components: {
    MdlTemplate,
    Layout,
    HomeHeader,
    DrawerNavigation
  },
  data: () => ({
    groups: [
      { name: 'Recommended for You' },
      { name: 'New releases' },
      { name: 'Subscriptions' }
    ]
  }),
  mounted () {
    this._scrollbars = []
    for (let scrollbar of this.$refs.scrollbars) {
      this._scrollbars.push(new IScroll(scrollbar, { scrollX: true, scrollY: false }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~material-design-lite/src/mixins";

.playlist-group {
  background: #fff;
  margin: 32px 0;
  // .mdl-typography--title {
  //   color: unquote("rgb(#{$color-accent-contrast})");
  // }
  @include shadow-2dp();
}

.mdl-layout__content {
  top: - $layout-desktop-header-height;
  padding-top: $layout-desktop-header-height;
  margin-bottom: - $layout-desktop-header-height;
  padding-bottom: $music-player-height;
  // background: unquote("rgb(#{$color-primary})");
  background: #f4f4f4;
  @media screen and (max-width: $layout-screen-size-threshold) {
    top: - $layout-mobile-header-height;
    padding-top: $layout-mobile-header-height;
    margin-bottom: - $layout-mobile-header-height;
  }
}

.iscroll-wrapper {
  position: relative;
  width: ($music-set-card-width + 16px) * 10 - 16px;
}

.mdl-card-group {
  display: flex;
}

.music-set-card {
  margin-right: 16px;
  border-radius: 2px;

  background: url('~@/assets/album1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    @include shadow-4dp();

    .mdl-card__play {
      visibility: visible;
      opacity: 1;
    }
  }

  .mdl-card {
    flex: 0 0 auto;
    width: $music-set-card-width;
    height: $music-set-card-height;

    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.5));
    background-color: transparent;
  }

  .mdl-card__title-text {
    color: #fff;
  }

  .mdl-card__subtitle-text {
    color: rgba(255, 255, 255, .5);
  }

  .mdl-card__play {
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    visibility: hidden;
    opacity: 0;

    position: absolute;
    right: 16px;
    bottom: 16px;
  }

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
