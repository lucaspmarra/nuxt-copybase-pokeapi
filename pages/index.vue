<template>
  <div class="container">
    <h1>PokeAPI</h1>

    <article v-if="error">
      <p>
        Não foi possível realizar a requisição no momento, por favor, tente
        novamente mais tarde.
      </p>
      <p>Stacktrace: {{ error.message }}</p>
    </article>

    <article>
      <section class="mb-5">
        <b-form-input
          v-model="pokemonName"
          class="mb-2 mr-sm-2 mb-sm-0 w-25"
          type="search"
          placeholder="Enter your name"
        ></b-form-input>
        <div class="mt-2">Value: {{ pokemonName }}</div>
        <b-button variant="primary" @click="onSubmit"
          >Search a pokemon</b-button
        >
      </section>

      <section v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </section>

      <section class="mb-2">
        <h4>Name:</h4>
        <NuxtLink :to="`/pokemon/${pokemon.id}`" prefetch>{{ pokemon.name }}</NuxtLink>
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
      try {
        const response = await this.$axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
        )
        this.loading = true
        this.pokemon = response.data
        // eslint-disable-next-line no-console
        console.log(response.data)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
        this.error = e
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
