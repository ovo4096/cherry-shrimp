<template></template>

<script>
export default {
  mounted () {
    const materialLayout = document.createElement('div')
    materialLayout.className = 'mdl-layout mdl-js-layout'
    materialLayout.innerHTML = `
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content"><!-- Your content goes here --></div>
    </main>
    `
    this.$el.appendChild(materialLayout)
  }
}
</script>
