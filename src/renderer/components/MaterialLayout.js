import '@/utils/mdlComponentHandler'
import 'material-design-lite/src/layout/layout'

const template = `<div class="mdl-layout mdl-js-layout">
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
</div>`

const htmlTemplate = document.createElement('div')
htmlTemplate.innerHTML = template
const mdlLayoutTemplate = htmlTemplate.firstChild
window.componentHandler.upgradeElement(mdlLayoutTemplate)

console.log(htmlTemplate.firstChild)

export default {
  template: htmlTemplate
}
