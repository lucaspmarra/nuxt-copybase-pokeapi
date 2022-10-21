<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <b-navbar
    id="navbar"
    class="shadow navbar d-lg-none fixed-bottom"
    type="light"
  >
    <b-navbar-brand>
      <img
        alt="Go to home page"
        class="ml-auto poke-api-logo"
        src="../assets/img/pokeapi.png"
      />
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">
        <div class="icon-navigation">
          <b-icon icon="house" title="Home"> </b-icon>
        </div>
        <span class="text-navigation">Home</span>
      </b-nav-item>

      <b-nav-item to="/about">
        <div class="icon-navigation">
          <b-icon icon="question-circle" title="About page"> </b-icon>
        </div>
        <span class="text-navigation">About</span>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data() {
    return {}
  },
}
</script>
