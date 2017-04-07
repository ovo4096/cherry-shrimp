<template>
  <div class="mdl-search">
    <div class="mdl-search__container"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "~material-design-lite/src/_variables";
@import "~material-design-lite/src/_mixins";

.mdl-search {
  display: flex;
  min-height: $layout-desktop-header-height;
  @media screen and (max-width: $layout-screen-size-threshold) {
    min-height: $layout-mobile-header-height;
  }
}
.mdl-search__container {
  flex-grow: 1;
  margin: ($layout-mobile-header-height - $layout-drawer-button-desktop-size) 12px;
  border-radius: 2px;
  box-sizing: border-box;
  @include shadow-2dp();

  @media screen and (max-width: $layout-screen-size-threshold) {
    margin: 4px;
  }
}
</style>
