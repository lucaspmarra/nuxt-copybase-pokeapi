<template>
  <div class="container">
    <h1>PokeAPI</h1>
    <section v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </section>
    <section v-if="error">
      <p>
        Não foi possível realizar a requisição no momento, por favor, tente
        novamente mais tarde.
      </p>
      <p>Stacktrace: {{ error.message }}</p>
    </section>
    <section>
      <b-form-input
        v-model.lazy="pokemon"
        class="mb-2 mr-sm-2 mb-sm-0 w-25"
        type="search"
        placeholder="Enter your name"
      ></b-form-input>
      <div class="mt-2">Value: {{ pokemon }}</div>
      <b-button variant="primary" @click="onSubmit">Pesquisar</b-button>
      <pre>{{ pokemons }}</pre>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      pokemon: '',
      pokemons: [],
      loading: false,
      error: false,
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await this.$axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemon}`
        )
        this.pokemons = response.data
        this.loading = true
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
