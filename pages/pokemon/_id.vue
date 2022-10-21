<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center id-card"
  >
    <article v-if="error">
      <p>Sorry, We Couldn't Connect You! Please try again later.</p>
      <p>Stacktrace: {{ error.message }}</p>
    </article>

    <article v-if="pokemon">
      <b-card class="poke-text poke-card-selected">
        <section class="mb-2">
          <h4>Name:</h4>
          <p>{{ pokemon.name }}</p>
        </section>

        <section class="mb-2">
          <h4>Abilities:</h4>
          <p v-for="ability in pokemon.abilities" :key="ability.ability.name">
            <a :href="ability.ability.url">{{ ability.ability.name }}</a>
          </p>
        </section>

        <section class="mb-2">
          <h4>Base Experience:</h4>
          <p>{{ pokemon.base_experience }}</p>
        </section>

        <section class="mb-2">
          <h4>Forms:</h4>
          <p v-for="form in pokemon.forms" :key="form.name">
            <a :href="form.url">{{ form.name }}</a>
          </p>
        </section>

        <section class="mb-2">
          <h4>Height:</h4>
          <p>{{ pokemon.height }} dm.</p>
        </section>

        <section class="mb-2">
          <h4 id="held-items">Held Items:</h4>
          <b-tooltip target="held-items" triggers="hover"
            >A held item (Japanese: 持ち物 held item) is an item that may be
            carried by a Pokémon.</b-tooltip
          >
          <p v-for="item in pokemon.held_items" :key="item.item.name">
            <a :href="item.item.url">{{ item.item.name }}</a>
          </p>
        </section>

        <section class="mb-2">
          <h4>Locations:</h4>
          <nuxt-link :to="`${pokemon.location_area_encounters}`"></nuxt-link>
          <a :href="pokemon.location_area_encounters"
            >Check encounters locations</a
          >
        </section>

        <section class="mb-2">
          <h4>Moves:</h4>
          <p v-for="move in pokemon.moves" :key="move.name">
            <a :href="move.move.url">{{ move.move.name }}</a>
          </p>
        </section>

        <section v-if="pokemon.species" class="mb-2">
          <h4>Species:</h4>
          <a :href="pokemon.species.url">{{ pokemon.species.name }}</a>
        </section>

        <!-- <section class="mb-2">
        <h4>Sprites:</h4>
        <a v-for="sprite in pokemon.sprites" :key="sprite.url" :href="sprite">
          {{ sprite }}
        </a>
      </section> -->

        <section class="mb-2">
          <h4>Stats:</h4>
          <p v-for="stat in pokemon.stats" :key="stat.stat.name">
            {{ stat.stat.name }}: {{ stat.base_stat }}
          </p>
        </section>

        <section class="mb-2">
          <h4>Types:</h4>
          <p v-for="type in pokemon.types" :key="type.type.name">
            <a :href="type.type.url">{{ type.type.name }}</a>
          </p>
        </section>

        <section class="mb-2">
          <h4>Weight:</h4>
          <p>{{ pokemon.weight }} hg.</p>
        </section>
      </b-card>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Idpage',
  data() {
    return {
      pokemon: [],
      error: false,
    }
  },
  mounted() {
    this.onRoute()
  },
  methods: {
    async onRoute() {
      try {
        const response = await this.$axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
        )
        this.pokemon = response.data
      } catch (e) {
        this.error = e
      }
    },
  },
}
</script>
