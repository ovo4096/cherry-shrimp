<template>
  <header class="mdl-layout__header"
          ref="header">
    <!--<div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
      </div>-->
    <!--<div class="mdl-layout__header-search">
        <div class="mdl-layout__header-search-back"
             @click="leaveSearch">
          <i class="material-icons">arrow_back</i>
        </div>
        <input type="text"
               placeholder="Search"
               class="mdl-layout__header-search-textfield"
               @focus="enterSearch"
               ref="search">
        <div class="mdl-layout__header-search-clear"
             @click="clearSearch">
          <i class="material-icons">clear</i>
        </div>
      </div>-->
    <!--<div class="mdl-layout__obfuscator"
           ref="obfuscator"
           @click="leaveSearch"></div>-->
  </header>
</template>

<script>
export default {
  // methods: {
  //   enterSearch () {
  //     this.$refs.header.classList.add('is-focus-search')
  //     this.$refs.obfuscator.classList.add('is-visible')
  //   },
  //   leaveSearch () {
  //     this.$refs.header.classList.remove('is-focus-search')
  //     this.$refs.obfuscator.classList.remove('is-visible')
  //     this.$refs.search.value = ''
  //   },
  //   clearSearch () {
  //     this.$refs.search.value = ''
  //     this.$refs.search.focus()
  //   }
  // }
}
</script>

<style lang="scss">
// @import "assets/_variables";
// .mdl-layout__header.is-visible-search {
//   .mdl-layout__drawer-button {
//     z-index: 5;
//     overflow: hidden;
//     text-align: center;
//     cursor: pointer;
//     height: $layout-drawer-button-desktop-size;
//     width: $layout-drawer-button-desktop-size;
//     font-size: 26px;
//     line-height: $layout-mobile-header-height;
//     font-family: Helvetica, Arial, sans-serif;
//     position: absolute;
//     top: 0;
//     left: 0;
//     margin: 8px 16px;
//     background: none;
//     color: rgba(0, 0, 0, 0.5);
//     @media screen and (max-width: $layout-screen-size-threshold) {
//       height: $layout-mobile-header-height - 16px;
//       width: $layout-mobile-header-height - 16px;
//       line-height: $layout-mobile-header-height - 8px;
//       margin: 8px 16px;
//     }
//   }
//   .mdl-layout__drawer-button:focus {
//     outline: none;
//   }
// }
// .mdl-layout__header.is-focus-search {
//   .mdl-layout__drawer-button {
//     z-index: 4;
//   }
// }
//
</style>

<style lang="scss" scoped>
// @import "assets/_variables";
// @import "~material-design-lite/src/_mixins";
// .mdl-layout__drawer header {
//   height: 150px;
//   background: $layout-header-bg-color;
// }
// .mdl-layout__header.is-visible-search {
//   .mdl-layout__header-search {
//     display: flex;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//   }
// }
// .mdl-layout__content {
//   bottom: $music-player-height;
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 64px;
//   @media screen and (max-width: $layout-screen-size-threshold) {
//     top: 56px;
//   }
// }
// .mdl-layout__header.is-focus-search {
//   .mdl-layout__header-search-back,
//   .mdl-layout__header-search-clear {
//     display: block;
//   }
//   .mdl-layout__header-search {
//     z-index: 6;
//   }
// }
// .mdl-layout__header-search {
//   display: none;
//   flex-grow: 1;
//   margin: ($layout-mobile-header-height - $layout-drawer-button-desktop-size) 16px;
//   border-radius: 2px;
//   box-sizing: border-box;
//   min-height: $layout-desktop-header-height - ($layout-mobile-header-height - $layout-drawer-button-desktop-size) * 2;
//   background: #fff;
//   z-index: 4;
//   color: rgba(0, 0, 0, 0.5);
//   overflow: hidden;
//   position: relative;
//   @include shadow-2dp();
//   @media screen and (max-width: $layout-screen-size-threshold) {
//     margin: 8px 16px;
//     min-height: $layout-mobile-header-height - 16px;
//   }
// }
// .mdl-layout__header-search-back {
//   display: none;
//   overflow: hidden;
//   text-align: center;
//   cursor: pointer;
//   height: $layout-drawer-button-desktop-size;
//   width: $layout-drawer-button-desktop-size;
//   font-size: 26px;
//   line-height: $layout-mobile-header-height;
//   font-family: Helvetica, Arial, sans-serif;
//   position: absolute;
//   top: 0;
//   left: 0;
//   @media screen and (max-width: $layout-screen-size-threshold) {
//     height: $layout-mobile-header-height - 16px;
//     width: $layout-mobile-header-height - 16px;
//     line-height: $layout-mobile-header-height - 8px;
//   }
// }
// .mdl-layout__header-search-clear {
//   display: none;
//   overflow: hidden;
//   text-align: center;
//   cursor: pointer;
//   height: $layout-drawer-button-desktop-size;
//   width: $layout-drawer-button-desktop-size;
//   font-size: 26px;
//   line-height: $layout-mobile-header-height;
//   font-family: Helvetica, Arial, sans-serif;
//   position: absolute;
//   top: 0;
//   right: 0;
//   @media screen and (max-width: $layout-screen-size-threshold) {
//     height: $layout-mobile-header-height - 16px;
//     width: $layout-mobile-header-height - 16px;
//     line-height: $layout-mobile-header-height - 8px;
//   }
// }
// .mdl-layout__header-search-textfield {
//   border: none;
//   padding: 0 ($layout-header-desktop-indent - 16px + 32px) 0 ($layout-header-desktop-baseline - 16px);
//   flex-grow: 1;
//   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//   font-size: 20px;
//   letter-spacing: 0.02em;
//   font-weight: 400;
//   box-sizing: border-box;
//   @media screen and (max-width: $layout-screen-size-threshold) {
//     padding: 0 ($layout-header-mobile-indent - 8px) 0 ($layout-header-mobile-baseline - 8px);
//   }
// }
// .mdl-layout__header-search-textfield:focus {
//   outline: none;
// }
</style>
