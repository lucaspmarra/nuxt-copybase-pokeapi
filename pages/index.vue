<template>
  <div
    class="d-flex flex-column pt-4 justify-content-center align-items-center"
  >
    <img
      class="pokemon-photo"
      src="../assets/img/Pokemon_brand.png"
      alt="all starters pokemons photo"
    />
    <article>
      <section>
        <b-card class="poke-card">
          <b-form-group
            id="input-group-1"
            label="Pokemon name:"
            label-for="pokemon-name"
          >
            <b-form-input
              id="pokemon-name"
              v-model="pokemonName"
              autocapitalize="none"
              class="mb-2 mr-sm-2 mb-sm-0"
              type="search"
              placeholder="Please type a Pokemon name"
              @keyup.enter="onSubmit"
            ></b-form-input>

            <p class="mt-1">
              You can find pokemon list here:
              <a href="https://pokeapi.co/api/v2/pokemon/"
                >https://pokeapi.co/api/v2/pokemon/</a
              >
            </p>
          </b-form-group>
          <b-button variant="primary" @click.prevent="onSubmit"
            >Search</b-button
          >

          <b-card-text class="mt-4">
            <article v-if="pokemon.name">
              <h4>Pokemon:</h4>
              <NuxtLink
                :to="`/pokemon/${pokemon.id}`"
                class="poke-text"
                prefetch
                >{{ pokemon.name }}</NuxtLink
              >
            </article>

            <article v-if="loading">
              <div class="spinner-border" role="status"></div>
              <span class="visually-hidden">Loading...</span>
            </article>

            <article v-if="error">
              <p>Sorry, We Couldn't Connect You! Please try again later.</p>
              <p>Stacktrace: {{ error.message }}</p>
              <b-img
                center
                class="pokemon-photo-about"
                src="../assets/img/pikachu.gif"
                alt="pikachu on hospital due error"
              />
            </article>
          </b-card-text>
        </b-card>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      pokemonName: '',
      pokemon: {},
      loading: false,
      error: false,
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        const response = await this.$axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonName
            .toLowerCase()
            .trim()}`
        )
        this.error = false
        this.pokemon = response.data
      } catch (e) {
        this.error = e
        this.pokemon.name = ''
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
