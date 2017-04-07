<template>
  <!-- The drawer is always open in large screens. The header is always shown,
                      even in small screens. -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout__title">Simple 2</span>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon"
                 for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input"
                   type="text"
                   name="sample"
                   id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
    <div class="mdl-layout__drawer drawer">
      <header class="account-header"></header>
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
      <div class="page-content">
        <!-- Your content goes here -->
        <search></search>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
          <div class="mdl-cell mdl-cell--1-col">1</div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--4-col">4</div>
          <div class="mdl-cell mdl-cell--4-col">4</div>
          <div class="mdl-cell mdl-cell--4-col">4</div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--6-col">6</div>
          <div class="mdl-cell mdl-cell--4-col">4</div>
          <div class="mdl-cell mdl-cell--2-col">2</div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">6 (8 tablet)</div>
          <div class="mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet">4 (6 tablet)</div>
          <div class="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2 (4 phone)</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'app',
  components: { Search },
  mounted () { }
}
</script>

<style scoped>
.drawer {
  border: none;
}

.account-header {
  height: 150px;
  background: url('./assets/account-header-bg.png');
}
</style>
