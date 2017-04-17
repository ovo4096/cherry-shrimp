<template>
  <header class="mdl-layout__header has-header-search">
    <div class="layout__header-search">
      <input type="text"
             placeholder="Search Music Library"
             @focus="startSearch"
             ref="searchInput">
      <div v-if="isSearching"
           class="layout__header-search-left-button"
           @click="exitSearch">
        <i class="material-icons">arrow_back</i>
      </div>
      <div v-if="isSearching"
           class="layout__header-search-right-button"
           @click="clearSearchInput">
        <i class="material-icons">clear</i>
      </div>
    </div>
    <div class="mdl-layout__obfuscator"
         ref="obfuscator"
         @click="exitSearch"></div>
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
@import "~@/assets/variables";
@import "~@/assets/mixins";

.mdl-layout__header.has-header-search {
  .mdl-layout__drawer-button {
    @include header-search-left-button();
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

.mdl-layout {
  .mdl-layout__obfuscator {
    z-index: 2;
  }

  .layout__header-search {
    @extend .mdl-layout__header-row;
    padding: 0 $layout-header-search-padding;
    overflow: hidden;

    @media screen and (max-width: $layout-screen-size-threshold) {
      padding: 0 $layout-header-search-padding;
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
      position: relative;
      z-index: 3;

      &:focus {
        outline: none;
      }

      @media screen and (max-width: $layout-screen-size-threshold) {
        padding: 8px 56px;
      }
    }

    .layout__header-search-left-button {
      @include header-search-left-button();
    }

    .layout__header-search-right-button {
      @include header-search-right-button();
    }
  }
}
</style>
