<template>
  <div id="app">
    <div class="carousel">
      <a class="carousel-item" href="#one!"><img src="./assets/logo.png"></a>
      <a class="carousel-item" href="#two!"><img src="./assets/logo.png"></a>
      <a class="carousel-item" href="#two!"><img src="./assets/logo.png"></a>
    </div>
    <ul class="collapsible" data-collapsible="accordion">
      <li>
        <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    </ul>
    <div class="collection">
      <a href="#!" class="collection-item"><span class="badge">1</span>Alan</a>
      <a href="#!" class="collection-item"><span class="new badge">4</span>Alan</a>
      <a href="#!" class="collection-item">Alan</a>
      <a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import jQuery from 'jquery'

export default {
  name: 'app',
  mounted () {
    jQuery('.carousel').carousel()
    jQuery('.collapsible').collapsible()
  }
}
</script>
