<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <b-navbar id="navbar" class="shadow navbar" toggleable="sm" type="light">
    <b-navbar-nav>
      <b-link to="/">
        <img
          alt="Go to home page"
          class="ml-auto poke-api-logo"
          src="../assets/img/pokeapi.png"
        />
      </b-link>
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
