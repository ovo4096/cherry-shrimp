<template>
  <layout>
    <home-header slot="header"></home-header>
    <drawer-navigation slot="drawer"></drawer-navigation>
    <main slot="content" class="mdl-layout__content">
      <div class="page-content">
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <mdl-template>
              <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect" @click="back">
                <i class="material-icons">arrow_back</i>
              </button>
            </mdl-template>
          </div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <div class="album">
              <div class="album-cover-card">
                <img src="~@/assets/album1.jpg" alt="album cover">
              </div>
              <div class="album-intro">
                <div class="album-title">Have You In My Wilderness</div>
                <div class="album-artist"><a href="#">Name</a></div>
                <div class="album-intro-text">
                  柔らかいコード感や洗練されたサウンドをベースに、美しく切ないハーモニーと耳に残る心地よいメロディーで根強いファンを持つLampのボーカル/作詞を担当する榊原香保里と、Lampのサポート・パーカッショニストであり、Takero Ogata 名義でnujabes監修のコンピレーション"Modal Soul Classics"や"Best Of Jazzin' For Ghibli"などにもトラックを提供するコンポーザー尾方伯郎によるポップス・ユニット、Minuano(ミヌアノ)が待望のセカンド・アルバムをリリース!!! 独自の洗練されたアレンジと、男女二人が織りなすの透明感のあるソフトなヴォーカルで根強いファンを持つLampの榊原香保里と、様々な人気作品に楽曲を提供するコンポーザー尾方伯郎による、ポップス・ユニット、Minuanoの待望のセカンド・アルバムが登場!!!ソフト・ロックやブラジリアン・ポップスを下地にしながら丁寧に作り上げられた極上ポップスの数々。尾方伯郎が榊原香保里のヴォーカルのソフトな質感を前面に押し、自身の持つ様々なジャンルの音楽的バック・ボーンとポップで甘いメロディーを見事に融合した心地よいアルバムになっています。クロスオーバーな感覚を持ちながらも全曲で間口の広いJ-POPに仕上がっており、統一感の中に数々のジャンルが見え隠れする、ただの歌ものとだけでは表せない奧の深い最高の一枚。 前作、敢えて落ち着いたイメージのアルバムとして意識的に統一感が図られていたが、今作はより逆に明るさやポップさに重きを置き、明るい多彩な音色を随所に取り込み、まるで暖かい空気感や木々のざわめきや水の流れを感じさせる様な、繊細で洗練された暖かい空気感を感じさせる音に統一されている。ボサノバやソフト・ロック、シティー・ポップスを感じさせる柔らかいグルーヴの曲は前作より一層の磨きが掛かっているが今作には珍しくTr.05の様なレゲエのリズムを使った曲などもあり、よりユニットとしての自由度を増し完成度を上げている。榊原香保里がLampのヴォーカル時に見せる圧倒的な浮遊感や、柔らかな質感の声の中に見せる一瞬の緊張感、物憂げな歌詞の世界感も尾方伯郎の手によって上手く活かされており、歌に拘り作り上げられたまさにエヴァー・グリーンなアルバムに仕上がっています。
                </div>
                <div class="album-actions">
                  <mdl-template>
                    <button class="mdl-button mdl-button--accent mdl-button--raised mdl-js-button mdl-js-ripple-effect">
                      <i class="material-icons">favorite</i> Add to library
                    </button>
                  </mdl-template>
                  <mdl-template>
                    <button class="mdl-button mdl-button--accent mdl-button--raised mdl-js-button mdl-js-ripple-effect">
                      <i class="material-icons">shuffle</i> Shuffle all
                    </button>
                  </mdl-template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
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
        </div>
        <router-link :to="{ name: 'Home'}">Album</router-link>
      </div>
    </main>
  </layout>
</template>

<script>
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
  methods: {
    back () {
      this.$router.go(-1)
    }
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

.song-menu .mdl-menu__container {
  overflow: hidden;
  height: 0 !important;
  &.is-visible {
    overflow: visible;
    height: auto;
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

.mdl-layout__content {
  top: - $layout-desktop-header-height;
  margin-bottom: $music-player-height - $layout-desktop-header-height;
  background-color: $global-bg-color;
  @media screen and (max-width: $layout-screen-size-threshold) {
    top: - $layout-mobile-header-height;
    margin-bottom: $music-player-height - $layout-mobile-header-height;
  }

  .page-content {
    padding-top: $layout-desktop-header-height;
    @media screen and (max-width: $layout-screen-size-threshold) {
      padding-top: $layout-mobile-header-height;
    }
  }
}

.album {
  display: flex;
  .album-cover-card {
    @include shadow-2dp();
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    margin-right: 16px;
  }
  .album-intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;

    .album-title {
      @include typo-headline();
      margin-bottom: 8px;
    }
    .album-artist {
      @include typo-caption();
      margin-bottom: 16px;
    }
    .album-intro-text {
      display: -webkit-box;
      color: rgba(0, 0, 0, 0.54);
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      height: 80px;
      max-height: 80px;
    }
    .album-actions {
      flex: 1;
      display: flex;
      align-items: flex-end;
      .mdl-template {
        margin: 0 8px;
        &:first-of-type {
          margin: 0 8px 0 0;
        }
      }
    }
  }
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
</style>
