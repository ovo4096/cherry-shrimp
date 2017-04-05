<template>
  <div>
    <header>
      <nav>
        <div class="nav-wrapper">
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <a href="#!" class="brand-logo center">Logo</a>
          <ul class="side-nav fixed" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      Hello, World
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
  import jQuery from 'jquery'
  
  export default {
    name: 'app',
    mounted () {
      jQuery('.button-collapse').sideNav()
      jQuery('.collapsible').collapsible()
    }
  }
</script>

<style>
  header,
  main,
  footer {
    padding-left: 300px;
  }
  
  @media only screen and (max-width: 992px) {
    header,
    main,
    footer {
      padding-left: 0;
    }
  }
</style>
