<template>
  <material-design-lite-template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header-bar></header-bar>
      <drawer-navigation></drawer-navigation>
      <main class="mdl-layout__content">
        <section class="mdl-layout__tab-panel is-active"
                 id="scroll-tab-1">
          <div class="page-content">
            <!-- Your content goes here -->
          </div>
        </section>
        <section class="mdl-layout__tab-panel"
                 id="scroll-tab-2">
          <div class="page-content">
            <!-- Your content goes here -->
          </div>
        </section>
        <section class="mdl-layout__tab-panel"
                 id="scroll-tab-3">
          <div class="page-content">
            <!-- Your content goes here -->
          </div>
        </section>
        <section class="mdl-layout__tab-panel"
                 id="scroll-tab-4">
          <div class="page-content">
            <!-- Your content goes here -->
          </div>
        </section>
        <section class="mdl-layout__tab-panel"
                 id="scroll-tab-5">
          <div class="page-content">
            <!-- Your content goes here -->
          </div>
        </section>
        <section class="mdl-layout__tab-panel"
                 id="scroll-tab-6">
          <div class="page-content">
            <!-- Your content goes here -->
          </div>
        </section>
      </main>
    </div>
  </material-design-lite-template>
</template>

<script>
import MaterialDesignLiteTemplate from '@/components/MaterialDesignLiteTemplate'
import HeaderBar from '@/components/HeaderBar'
import DrawerNavigation from '@/components/DrawerNavigation'

export default {
  components: {
    MaterialDesignLiteTemplate,
    HeaderBar,
    DrawerNavigation
  }
}
</script>
