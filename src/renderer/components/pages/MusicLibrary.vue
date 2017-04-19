<template>
  <layout>
    <header-bar slot="header"></header-bar>
    <drawer-navigation slot="drawer"></drawer-navigation>
    <main slot="content" class="mdl-layout__content">
      <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
        <div class="page-content">
          tab1
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-2">
        <div class="page-content">
          tab2
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-3">
        <div class="page-content">
          tab3
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-4">
        <div class="page-content">
          tab4
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-5">
        <div class="page-content">
          tab5
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-6">
        <div class="page-content">
          tab6
        </div>
      </section>
    </main>
  </layout>
</template>

<script>
import MdlTemplate from '@/components/MdlTemplate'
import Layout from '@/components/Layout'
import HeaderBar from '@/components/HeaderBar'
import DrawerNavigation from '@/components/DrawerNavigation'

export default {
  components: {
    MdlTemplate,
    Layout,
    HeaderBar,
    DrawerNavigation
  }
}
</script>
