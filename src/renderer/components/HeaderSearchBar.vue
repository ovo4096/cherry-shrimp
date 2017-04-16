<template>
  <header class="mdl-layout__header has-header-search">
    <div class="layout__header-search">
      <input type="text"
             placeholder="Search Music Library" @focus="startSearch" ref="searchInput">
      <div v-if="isSearching" class="layout__header-search-exit-button" @click="exitSearch">
        <i class="material-icons">arrow_back</i>
      </div>
      <div v-if="isSearching" class="layout__header-search-clear-button" @click="clearSearchInput">
        <i class="material-icons">clear</i>
      </div>
    </div>
    <div class="mdl-layout__obfuscator" ref="obfuscator" @click="exitSearch"></div>
  </header>
</template>

<script>
export default {
  data: () => ({
    isSearching: false
  }),
  methods: {
    startSearch () {
      this.isSearching = true
      this.$refs.obfuscator.classList.add('is-visible')
    },
    exitSearch () {
      this.isSearching = false
      this.$refs.searchInput.value = ''
      this.$refs.obfuscator.classList.remove('is-visible')
    },
    clearSearchInput () {
      this.$refs.searchInput.value = ''
      this.$refs.searchInput.focus()
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/_variables";

.mdl-layout__header.has-header-search {
  .mdl-layout__drawer-button {
    background: none;
    color: #757575;
    left: 40px;
    margin: 8px 8px 8px 0;
    @media screen and (max-width: $layout-screen-size-threshold) {
      left: 16px;
      margin: 4px 8px 4px 0;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/_variables";
@import "~material-design-lite/src/layout/layout";

.mdl-layout {
  .mdl-layout__obfuscator {
    z-index: -1;
  }
  
  .layout__header-search {
    @extend .mdl-layout__header-row;
    padding-left: 40px;
    overflow: hidden;

    @media screen and (max-width: $layout-screen-size-threshold) {
      padding-left: 16px;
    }

    input {
      border: none;
      padding: 8px 56px;
      height: $layout-drawer-button-desktop-size;
      flex-grow: 1;
      border-radius: 2px;
      box-sizing: border-box;
      @include typo-title();
      font-weight: 400;

      &:focus {
        outline: none;
      }

      @media screen and (max-width: $layout-screen-size-threshold) {
        padding: 8px 56px;
      }
    }

    .layout__header-search-exit-button {
      @extend .mdl-layout__drawer-button;
      color: #757575;
      left: 40px;
      margin: 8px 8px 8px 0;
      
      @media screen and (max-width: $layout-screen-size-threshold) {
        left: 16px;
        margin: 4px 8px 4px 0;
      }

      &:focus {
        outline: none;
      }

      .material-icons {
        background: #fff;
      }
    }    

    .layout__header-search-clear-button {
      @extend .mdl-layout__drawer-button;

      background: none;
      color: #757575;
      left: auto;
      right: 32px;
      margin: 8px 8px 8px 0;
      @media screen and (max-width: $layout-screen-size-threshold) {
        right: 8px;
        margin: 4px 8px 4px 0;
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
