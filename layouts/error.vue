<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mb-4">
    <b-card class="text-center mx-auto mb-4">
      <b-card-text>
        <h2 v-if="error.statusCode === 404" class="text-center">
          Página não encontrada
        </h2>
        <h1 v-else class="text-center">Ocorreu um erro</h1>

        <img class="error-gif" src="../assets/img/urban-line-404-1.gif" alt="error page" />
      </b-card-text>

      <b-button to="/" variant="primary" class="mt-4">Voltar</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
