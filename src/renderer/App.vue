<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header is-visible-search" ref="header">
      <div class="mdl-layout__header-row">
        <!--<span class="mdl-layout__title">Simple</span>-->
        <div class="mdl-layout-spacer"></div>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" @click="enterSearch">
          <i class="material-icons">search</i>
        </button>
      </div>
      <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Tab 1</a>
        <a href="#scroll-tab-2" class="mdl-layout__tab">Tab 2</a>
        <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>
        <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>
        <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>
        <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>
      </div>
      <div class="mdl-layout__header-search">
        <div class="mdl-layout__header-search-back" @click="leaveSearch">
          <i class="material-icons">arrow_back</i>
        </div>
        <input type="text" placeholder="Search" class="mdl-layout__header-search-textfield" @focus="enterSearch" ref="search">
        <div class="mdl-layout__header-search-clear" @click="clearSearch">
          <i class="material-icons">clear</i>
        </div>
      </div>
      <div class="mdl-layout__obfuscator" ref="obfuscator" @click="leaveSearch"></div>
    </header>
    <div class="mdl-layout__drawer">
      <header></header>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link"
           href="">Link</a>
        <a class="mdl-navigation__link"
           href="">Link</a>
        <a class="mdl-navigation__link"
           href="">Link</a>
        <a class="mdl-navigation__link"
           href="">Link</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
        <div class="page-content">
          <!-- Your content goes here -->
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
              <h5>Recommended for You</h5>
            </div>
          </div>
          <div class="mdl-grid roll" ref="recommendRollbar">
            <div class="mdl-cell mdl-cell--12-col clearfix roll-container">
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
            </div>
          </div>
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
              <h5>New Albums</h5>
            </div>
          </div>
          <div class="mdl-grid roll" ref="newRollbar">
            <div class="mdl-cell mdl-cell--12-col clearfix roll-container">
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
              <div class="album-card mdl-card mdl-shadow--2dp"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-2">
        <div class="page-content"><!-- Your content goes here --></div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-3">
        <div class="page-content"><!-- Your content goes here --></div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-4">
        <div class="page-content"><!-- Your content goes here --></div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-5">
        <div class="page-content"><!-- Your content goes here --></div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-6">
        <div class="page-content"><!-- Your content goes here --></div>
      </section>
    </main>
  </div>
</template>

<script>
import IScroll from 'iscroll'

export default {
  name: 'app',
  mounted () {
    const albumRollbar = []
    albumRollbar.push(new IScroll(this.$refs.recommendRollbar, { scrollX: true, scrollY: false, mouseWheel: true }))
    albumRollbar.push(new IScroll(this.$refs.newRollbar, { scrollX: true, scrollY: false, mouseWheel: true }))
  },
  methods: {
    enterSearch () {
      this.$refs.header.classList.add('is-focus-search')
      this.$refs.obfuscator.classList.add('is-visible')
    },
    leaveSearch () {
      this.$refs.header.classList.remove('is-focus-search')
      this.$refs.obfuscator.classList.remove('is-visible')
      this.$refs.search.value = ''
    },
    clearSearch () {
      this.$refs.search.value = ''
      this.$refs.search.focus()
    }
  }
}
</script>

<style lang="scss">
@import "assets/_variables";

.mdl-layout__header.is-visible-search {
  .mdl-layout__drawer-button {
    z-index: 5;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    height: $layout-drawer-button-desktop-size;
    width: $layout-drawer-button-desktop-size;
    font-size: 26px;
    line-height: $layout-mobile-header-height;
    font-family: Helvetica, Arial, sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    margin: 8px 16px;
    background: none;
    color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: $layout-screen-size-threshold) {
      height: $layout-mobile-header-height - 16px;
      width: $layout-mobile-header-height - 16px;
      line-height: $layout-mobile-header-height - 8px;
      margin: 8px 16px;
    }
  }

  .mdl-layout__drawer-button:focus {
    outline: none;
  }
}

.mdl-layout__header.is-focus-search {
  .mdl-layout__drawer-button {
    z-index: 4;
  }
}
</style>

<style lang="scss" scoped>
@import "assets/_variables";
@import "~material-design-lite/src/_mixins";

.mdl-layout__drawer {
  border: none;
}

.mdl-layout__drawer header {
  height: 150px;
  background: $layout-header-bg-color;
}

.mdl-layout__header.is-visible-search {
  .mdl-layout__header-search {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}

.mdl-layout__header.is-focus-search {
  .mdl-layout__header-search-back, .mdl-layout__header-search-clear {
    display: block;
  }

  .mdl-layout__header-search {
    z-index: 6;
  }
}

.mdl-layout__header-search {
  display: none;
  flex-grow: 1;
  margin: ($layout-mobile-header-height - $layout-drawer-button-desktop-size) 16px;
  border-radius: 2px;
  box-sizing: border-box;
  min-height: $layout-desktop-header-height - ($layout-mobile-header-height - $layout-drawer-button-desktop-size) * 2;
  background: #fff;
  z-index: 4;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;

  @include shadow-2dp();

  @media screen and (max-width: $layout-screen-size-threshold) {
    margin: 8px 16px;
    min-height: $layout-mobile-header-height - 16px;
  }
}

.mdl-layout__header-search-back {
  display: none;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  height: $layout-drawer-button-desktop-size;
  width: $layout-drawer-button-desktop-size;
  font-size: 26px;
  line-height: $layout-mobile-header-height;
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: $layout-screen-size-threshold) {
    height: $layout-mobile-header-height - 16px;
    width: $layout-mobile-header-height - 16px;
    line-height: $layout-mobile-header-height - 8px;
  }
}

.mdl-layout__header-search-clear {
  display: none;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  height: $layout-drawer-button-desktop-size;
  width: $layout-drawer-button-desktop-size;
  font-size: 26px;
  line-height: $layout-mobile-header-height;
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: $layout-screen-size-threshold) {
    height: $layout-mobile-header-height - 16px;
    width: $layout-mobile-header-height - 16px;
    line-height: $layout-mobile-header-height - 8px;
  }
}

.mdl-layout__header-search-textfield {
  border: none;
  padding: 0 ($layout-header-desktop-indent - 16px + 32px) 0 ($layout-header-desktop-baseline - 16px);
  flex-grow: 1;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 20px;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;

  @media screen and (max-width: $layout-screen-size-threshold) {
    padding: 0 ($layout-header-mobile-indent - 8px) 0 ($layout-header-mobile-baseline - 8px);
  }
}

.mdl-layout__header-search-textfield:focus {
  outline: none;
}

.album-card.mdl-card {
  width: 256px;
  height: 256px;
  background: $layout-header-bg-color;
  margin-right: 8px;
  float: left;
}

.album-card.mdl-card:last-of-type {
  margin-right: 0;
}
.roll {
  position: relative;
  height: 272px;
}

.roll-container {
  top: 8px;
  left: 8px;
	position: absolute;
	z-index: 1;
	width: 2120px;
	transform: translateZ(0);
	user-select: none;
}
</style>
