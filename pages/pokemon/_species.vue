<template>
  <div class="container">
    <h1>PokeAPI</h1>
    <nuxt-link to="/">Voltar</nuxt-link>
    <article v-if="error">
      <p>
        Não foi possível realizar a requisição no momento, por favor, tente
        novamente mais tarde.
      </p>
      <p>Stacktrace: {{ error.message }}</p>
    </article>

    <article>
      <pre>{{ species }}</pre>
    </article>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      species: [],
      error: false,
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    async onSubmit() {
      try {
        const response = await this.$axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${this.$route.params.name}`
        )
        this.species = response.data
        // eslint-disable-next-line no-console
        console.log(response.data)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
        this.error = e
      }
    },
  },
}
</script>
